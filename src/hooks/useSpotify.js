import { useState, useEffect } from 'react';

export default function useSpotify() {
  const [key, search] = useState('')
  const [songs, setSongs] = useState([])
  
  const fetchSong = async (query) => {
    const data = await fetch(`/api/search?query=${query}`)
      .then(response => response.json())

    if (data.error) return setSongs([])

    setSongs(data.tracks.items.map(item => ({
        image: item.album.images[2].url,
        name: item.name,
        artists: item.artists.map(artist => artist.name).join(', '),
        duration: item.duration_ms,
        preview: item.preview_url,
        uri: item.uri,
      })
    ))
  }

  useEffect(() => {
    console.log(key)

    key ? fetchSong(key) : setSongs([])
  }, [key])

  useEffect(() => {
    console.log(songs)
  }, [songs])

  return [songs, search]
}