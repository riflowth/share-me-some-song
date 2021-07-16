import { useEffect, useState } from 'react'

import SearchResultList from './SearchResultList'

export default function SearchBox() {
  const [input, setInput] = useState('')
  const [songList, setSongList] = useState([])

  // https://developer.spotify.com/console/get-search-item/
  const fetchSong = async () => {
    const data = await fetch(
      `https://api.spotify.com/v1/search?q=${input}&type=track&offset=0&limit=4`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_TOKEN}`
        }
      })
      .then(response => response.json())

    setSongList([])
    if (data.error) return

    const tracks = []
    data.tracks.items.forEach(track => {
      tracks.push({
        image: track.album.images[1].url,
        name: track.name,
        artists: track.artists.map(artist => artist.name).join(', '),
        duration: track.duration_ms,
        uri: track.uri,
      })
    })
    setSongList(tracks)
  }

  useEffect(() => {
    input && fetchSong(input)
  }, [input])

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
        />

        <button
          type="button"
          className="px-4 py-1 bg-gray-700 hover:bg-gray-600 text-gray-400 focus:ring-0 text-base font-semibold"
          onClick={fetchSong}
        >
          SEND
        </button>
      </div>

      <SearchResultList
        show={input.length != 0}
        result={songList}
      />
    </div>
  )
}