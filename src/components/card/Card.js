import { useState, useEffect } from 'react'

const feelings = [
  { text: 'HAPPINESS',      style: 'font-bold bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-400' },
  { text: 'SADNESS',        style: 'font-bold bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-400' },
  { text: 'LOVE',           style: 'font-bold bg-clip-text text-transparent bg-gradient-to-t from-pink-400 to-pink-200' },
  { text: 'LIFELESSNESS',   style: 'font-bold bg-clip-text text-transparent bg-gradient-to-t from-blue-500 to-blue-300' },
]

const FEELING_CHANGE_INTERVAL = 2000
const randomFeeling = () => feelings[Math.floor(Math.random() * feelings.length)]

export default function Card() {
  const [feeling, setFeeling] = useState({})

  useEffect(() => {
    const interval = setInterval(() => setFeeling(randomFeeling), FEELING_CHANGE_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-grow max-w-md w-full mx-6 p-4 bg-gray-800 select-none">
      <div className="flex flex-col">
        <p className="text-sm text-gray-400 tracking-widest">
          SHARE YOUR <span>{feeling.text}</span>
        </p>
        <h2 className="font-semibold text-lg text-gray-200">BY SHARE YOUR SONG</h2>
      </div>
    </div>
  )
}