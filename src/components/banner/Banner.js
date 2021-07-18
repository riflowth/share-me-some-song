import { useState } from 'react'
import useInterval from '@hooks/useInterval'

const feelings = ['happiness', 'love', 'excitement', 'lonely', 'heartbroken', 'hopeless', 'stressed', 'frustrated']

const randomFeeling = (current) => {
  let random = feelings[Math.floor(Math.random() * feelings.length)]
  while (random == current) {
    random = feelings[Math.floor(Math.random() * feelings.length)]
  }
  return random
}

export default function Banner() {
  const [feeling, setFeeling] = useState(randomFeeling())
  useInterval(() => setFeeling(randomFeeling()), 1000)

  return (
    <div className="relative z-50 mb-12 text-center select-none">
      <p className="text-emerald-700 text-xl mb-2">Share Your <span className="capitalize">{feeling}</span></p>
      <h1 className="text-white text-5xl font-bold mb-4">Share Your Song</h1>
    </div>
  )
}