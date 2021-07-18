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
  useInterval(() => setFeeling(randomFeeling()), 2000)

  return (
    <div className="relative z-50 mb-12 text-center select-none">
      <p className="text-emerald-600 text-lg font-bold uppercase leading-none">Share Your</p>
      <h1 className="text-gray-200 text-6xl font-bold mb-3 sm:mb-4"><span className="capitalize">{feeling}</span></h1>
      <p className="text-gray-500 text-lg lowercase leading-none">into my spotify playlist</p>
    </div>
  )
}