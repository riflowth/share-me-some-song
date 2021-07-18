import { useState } from 'react'
import useSpotify from '@hooks/useSpotify'

import SearchResultList from './SearchResultList'

export default function SearchBox() {
  const [input, setInput] = useState('')
  const songList = useSpotify(input)

  return (
    <div className="relative max-w-sm sm:max-w-lg w-full mx-auto select-none">
      <div className="relative z-10 p-4 transition-shadow duration-500 ease-out shadow-xl hover:shadow-2xl ring-2 ring-white ring-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
        <div className="flex flex-row items-center">
          <span className="absolute text-gray-500 ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>

          <input
            type="text"
            className="w-full pl-8 pr-2 py-1 bg-gray-800 bg-opacity-40 focus:outline-none text-gray-300 rounded-lg rounded-tr-none rounded-br-none"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />

          <button
            type="button"
            className="px-4 py-1 bg-gray-800 hover:bg-opacity-80 text-gray-400 focus:ring-0 text-base font-semibold rounded-tr-lg rounded-br-lg bg-transparent"
          >
            SEND
          </button>
        </div>
      </div>

      <SearchResultList result={songList} />

      {/* decorations */}
      <div className="absolute inset-0 z-0 opacity-60 filter blur-xl">
        <div style={{ borderRadius: '34% 66% 31% 69% / 66% 76% 24% 34%' }} className="absolute -top-1/2 -left-14 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-blue-700 filter blur-xl" />
        <div style={{ borderRadius: '83% 17% 31% 69% / 87% 35% 65% 13%' }} className="absolute -bottom-20 -right-16 w-60 h-60 rounded-full bg-gradient-to-l from-emerald-300 to-blue-600 filter blur-xl" />
      </div>
    </div>
  )
}