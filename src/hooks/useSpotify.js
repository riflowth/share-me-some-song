import { useState, useEffect } from 'react';

const cachedSongs = new Map()

export default function useSpotify() {
  const [key, set] = useState('')
  const [songs, setSongs] = useState([])

  const fetchSong = async (query) => {
    if (cachedSongs.has(query)) return setSongs(cachedSongs.get(query))

    const data = await fetch(`/api/search?query=${query}`)
      .then(response => response.json())

    if (data.error) return setSongs([])

    const result = data.tracks.items.map(item => ({
      image: item.album.images[2].url,
      name: item.name,
      artists: item.artists.map(artist => artist.name).join(', '),
      duration: item.duration_ms,
      preview: item.preview_url,
      uri: item.uri,
    }))

    cachedSongs.set(query, result)
    setSongs(result)
  }

  useEffect(() => {
    if (!key) return setSongs([])
    const delay = setTimeout(() => fetchSong(key), 200)
    return () => clearTimeout(delay)
  }, [key])

  return [songs, { key, set }]
}