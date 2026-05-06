'use client'
import { motion, useMotionValue, useTransform, animate } from 'motion/react'
import { useEffect, useState } from 'react'

interface SpeedometerGaugeProps {
  progress: number
  title: string
  current: string
  target: string
  size?: number
}

function round(n: number): number {
  return Math.round(n * 100) / 100
}

function polarToCartesian(cx: number, cy: number, r: number, angleDegrees: number) {
  const rad = (angleDegrees * Math.PI) / 180
  return { x: round(cx + r * Math.cos(rad)), y: round(cy + r * Math.sin(rad)) }
}

function describeArc(cx: number, cy: number, r: number, start: number, end: number) {
  const s = polarToCartesian(cx, cy, r, start)
  const e = polarToCartesian(cx, cy, r, end)
  const large = end - start <= 180 ? '0' : '1'
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`
}

export function SpeedometerGauge({ progress, title, current, target, size = 160 }: SpeedometerGaugeProps) {
  const clamped = Math.min(Math.max(progress, 0), 1)
  const [mounted, setMounted] = useState(false)

  // Standard horizontal arc: gap at the bottom. 
  // Start bottom-left (150°), sweep over top (270°), end bottom-right (390°).
  const startAngle = 150
  const endAngle = 390
  const totalArc = 240

  const cx = size / 2
  const cy = size / 2 + 10
  const r = size / 2 - 20
  const svgW = size
  const svgH = round(size * 0.75)

  const arcPath = describeArc(cx, cy, r, startAngle, endAngle)
  const arcLen = round((totalArc / 360) * 2 * Math.PI * r)

  const motionProg = useMotionValue(0)
  const dashOffset = useTransform(motionProg, [0, 1], [arcLen, round(arcLen * (1 - clamped))])
  const needleAngle = useTransform(motionProg, [0, 1], [startAngle, startAngle + totalArc * clamped])

  useEffect(() => {
    setMounted(true)
    const c = animate(motionProg, 1, { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 })
    return c.stop
  }, [motionProg, clamped])

  const ticks = Array.from({ length: 13 }, (_, i) => {
    const angle = startAngle + (totalArc / 12) * i
    return {
      inner: polarToCartesian(cx, cy, r - 6, angle),
      outer: polarToCartesian(cx, cy, r + 1, angle),
      major: i % 3 === 0,
    }
  })

  return (
    <div className="flex flex-col items-center">
      <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} className="overflow-visible">
        {/* Track — light green */}
        <path d={arcPath} fill="none" stroke="#bbf7d0" strokeWidth={6} strokeLinecap="round" className="dark:stroke-emerald-900" />

        {/* Progress — dark green, fills left→right */}
        {mounted && (
          <motion.path
            d={arcPath}
            fill="none"
            stroke="#059669"
            strokeWidth={6}
            strokeLinecap="round"
            className="dark:stroke-emerald-400"
            style={{ strokeDasharray: arcLen, strokeDashoffset: dashOffset }}
          />
        )}

        {/* Ticks */}
        {ticks.map((t, i) => (
          <line key={i} x1={t.inner.x} y1={t.inner.y} x2={t.outer.x} y2={t.outer.y}
            stroke="currentColor" strokeWidth={t.major ? 1.5 : 0.75}
            className="text-emerald-300 dark:text-emerald-800" />
        ))}

        {/* Needle */}
        {mounted && (
          <motion.g style={{ rotate: needleAngle, transformOrigin: `${cx}px ${cy}px` }}>
            <line x1={cx} y1={cy} x2={cx + r - 14} y2={cy}
              stroke="currentColor" strokeWidth={2} strokeLinecap="round"
              className="text-zinc-900 dark:text-zinc-100" />
          </motion.g>
        )}

        {/* Center dot */}
        <circle cx={cx} cy={cy} r={3} fill="currentColor" className="text-zinc-900 dark:text-zinc-100" />
      </svg>

      <div className="mt-3 flex flex-col items-center gap-1">
        <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">{current}</span>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">of {target}</span>
      </div>
    </div>
  )
}
