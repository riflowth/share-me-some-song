import { useState } from 'react'
import useInterval from '@hooks/useInterval'

import SearchBar from './SearchBar'

const feelings = ['happiness', 'love', 'excitement', 'lonely', 'heartbroken', 'hopeless', 'stressed', 'frustrated']

const randomFeeling = (current) => {
  let random = feelings[Math.floor(Math.random() * feelings.length)]
  while (random == current) {
    random = feelings[Math.floor(Math.random() * feelings.length)]
  }
  return random
}

export default function Card() {
  const [feeling, setFeeling] = useState(randomFeeling())
  useInterval(() => setFeeling(randomFeeling()), 1000)

  return (
    <div className="relative max-w-lg w-full mx-6">
      <div className="relative z-20 select-none flex flex-col flex-grow p-4 transition-shadow duration-500 ease-out shadow-xl hover:shadow-2xl ring-2 ring-gray-400 ring-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
        <div className="mb-4">
          <p className="text-xs text-gray-400 tracking-widest">SHARE YOUR <span className="uppercase">{feeling}</span></p>
          <h2 className="font-semibold text-lg text-gray-200">SHARE YOUR SONG</h2>
        </div>

        <SearchBar />
      </div>

      {/* decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/2 -left-14 w-36 h-36 rounded-full bg-gradient-to-br from-gray-400 to-transparent filter blur-sm" />
        <div className="absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-gradient-to-l from-gray-400 to-transparent filter blur-sm" />
        <div className="absolute -bottom-20 left-2 w-12 h-12 rounded-full bg-gradient-to-tr from-gray-500 to-transparent filter blur-sm" />
      </div>
    </div>
  )
}