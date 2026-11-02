import { NextResponse } from 'next/server'

const CHESS_USERNAME = 'DariusAlexander18'
const CHESS_STATS_URL = `https://api.chess.com/pub/player/${CHESS_USERNAME}/stats`

type ChessGameStats = {
  last?: {
    rating?: number
    date?: number
  }
}

type ChessStatsResponse = {
  chess_bullet?: ChessGameStats
  chess_blitz?: ChessGameStats
  chess_rapid?: ChessGameStats
}

export const revalidate = 3600

export async function GET() {
  try {
    const response = await fetch(CHESS_STATS_URL, {
      headers: {
        'User-Agent':
          'DariusAlexanderPortfolio/1.0 (mailto:dariusalexander1118@gmail.com)',
      },
      next: { revalidate },
    })

    if (!response.ok) {
      throw new Error(`Chess.com returned ${response.status}`)
    }

    const stats = (await response.json()) as ChessStatsResponse
    const bullet = stats.chess_bullet?.last?.rating
    const blitz = stats.chess_blitz?.last?.rating
    const rapid = stats.chess_rapid?.last?.rating

    if (
      typeof bullet !== 'number' ||
      typeof blitz !== 'number' ||
      typeof rapid !== 'number'
    ) {
      throw new Error('Chess.com response is missing a live rating')
    }

    return NextResponse.json({
      username: CHESS_USERNAME,
      ratings: { bullet, blitz, rapid },
    })
  } catch (error) {
    console.error('Unable to load Chess.com ratings:', error)
    return NextResponse.json(
      { error: 'Unable to load Chess.com ratings' },
      { status: 502 },
    )
  }
}
