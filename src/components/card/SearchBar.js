import { useState } from 'react'
import useSpotify from '@hooks/useSpotify'

import SearchResultList from './SearchResultList'

export default function SearchBox() {
  const [input, setInput] = useState('')
  const songList = useSpotify(input)

  return (
    <div className="relative mt-4">
      <div className="flex flex-row items-center">
        <span className="absolute text-gray-600 ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>

        <input
          type="text"
          className="w-full pl-8 pr-2 py-1 bg-gray-900 border-b border-gray-600 focus:outline-none text-gray-300"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        <button
          type="button"
          className="px-4 py-1 bg-gray-700 hover:bg-gray-600 border-b border-gray-700 hover:border-gray-600 text-gray-400 focus:ring-0 text-base font-semibold"
        >
          SEND
        </button>
      </div>

      <SearchResultList result={songList} />
    </div>
  )
}