'use client'
import { motion, useMotionValue, useTransform, animate } from 'motion/react'
import { useEffect, useState } from 'react'

interface SpeedometerGaugeProps {
  progress: number // 0 to 1
  title: string
  current: string
  target: string
  size?: number
}

// Round to 2 decimal places to avoid SSR/client hydration mismatches
function round(n: number): number {
  return Math.round(n * 100) / 100
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  r: number,
  angleInDegrees: number
): { x: number; y: number } {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
  return {
    x: round(centerX + r * Math.cos(angleInRadians)),
    y: round(centerY + r * Math.sin(angleInRadians)),
  }
}

function describeArc(
  x: number,
  y: number,
  r: number,
  start: number,
  end: number
): string {
  const startPoint = polarToCartesian(x, y, r, end)
  const endPoint = polarToCartesian(x, y, r, start)
  const largeArcFlag = end - start <= 180 ? '0' : '1'

  return [
    'M',
    startPoint.x,
    startPoint.y,
    'A',
    r,
    r,
    0,
    largeArcFlag,
    0,
    endPoint.x,
    endPoint.y,
  ].join(' ')
}

export function SpeedometerGauge({
  progress,
  title,
  current,
  target,
  size = 160,
}: SpeedometerGaugeProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 1)
  const [mounted, setMounted] = useState(false)

  // Gauge arc parameters
  const cx = size / 2
  const cy = size / 2 + 8
  const radius = size / 2 - 20
  const startAngle = -210 // left side
  const endAngle = 30 // right side
  const totalArc = endAngle - startAngle // 240 degrees

  // Background arc (full gauge track)
  const bgArcPath = describeArc(cx, cy, radius, startAngle, endAngle)

  // Calculate circumference for dash animation
  const arcLength = round((totalArc / 360) * 2 * Math.PI * radius)

  // Animated progress
  const motionProgress = useMotionValue(0)
  const dashOffset = useTransform(
    motionProgress,
    [0, 1],
    [arcLength, round(arcLength * (1 - clampedProgress))]
  )

  // Needle angle
  const needleAngle = useTransform(
    motionProgress,
    [0, 1],
    [startAngle - 90, startAngle - 90 + totalArc * clampedProgress]
  )

  useEffect(() => {
    setMounted(true)
    const controls = animate(motionProgress, 1, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    })
    return controls.stop
  }, [motionProgress, clampedProgress])

  // Tick marks
  const ticks = Array.from({ length: 13 }, (_, i) => {
    const angle = startAngle + (totalArc / 12) * i
    const innerPoint = polarToCartesian(cx, cy, radius - 6, angle)
    const outerPoint = polarToCartesian(cx, cy, radius + 1, angle)
    const isMajor = i % 3 === 0
    return { innerPoint, outerPoint, isMajor, angle }
  })

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={size * 0.78}
        viewBox={`0 0 ${size} ${size * 0.78}`}
        className="overflow-visible"
      >
        {/* Background track */}
        <path
          d={bgArcPath}
          fill="none"
          stroke="currentColor"
          strokeWidth={6}
          strokeLinecap="round"
          className="text-zinc-200 dark:text-zinc-800"
        />

        {/* Animated progress arc — only render on client to avoid hydration mismatch */}
        {mounted && (
          <motion.path
            d={bgArcPath}
            fill="none"
            stroke="currentColor"
            strokeWidth={6}
            strokeLinecap="round"
            className="text-zinc-800 dark:text-zinc-200"
            style={{
              strokeDasharray: arcLength,
              strokeDashoffset: dashOffset,
            }}
          />
        )}

        {/* Tick marks */}
        {ticks.map((tick, i) => (
          <line
            key={i}
            x1={tick.innerPoint.x}
            y1={tick.innerPoint.y}
            x2={tick.outerPoint.x}
            y2={tick.outerPoint.y}
            stroke="currentColor"
            strokeWidth={tick.isMajor ? 1.5 : 0.75}
            className="text-zinc-300 dark:text-zinc-700"
          />
        ))}

        {/* Needle — only render on client */}
        {mounted && (
          <motion.g style={{ rotate: needleAngle, transformOrigin: `${cx}px ${cy}px` }}>
            <line
              x1={cx}
              y1={cy}
              x2={cx}
              y2={cy - radius + 14}
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="text-zinc-900 dark:text-zinc-100"
            />
          </motion.g>
        )}

        {/* Center dot */}
        <circle
          cx={cx}
          cy={cy}
          r={3}
          fill="currentColor"
          className="text-zinc-900 dark:text-zinc-100"
        />
      </svg>

      {/* Labels */}
      <div className="mt-4 flex flex-col items-center gap-1">
        <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
          {current}
        </span>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          of {target}
        </span>
      </div>
    </div>
  )
}
