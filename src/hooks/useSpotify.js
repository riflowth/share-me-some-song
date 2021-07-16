import { useState, useEffect } from 'react';

export default function useSpotify(query, limit) {
  const [songList, setSongList] = useState([])

  const fetchSong = async () => {
    const data = await fetch(`/api/search?query=${query}&limit=${limit}`)
      .then(response => response.json())

    setSongList([])
    if (data.error) return

    setSongList(data.tracks.items.map(track => ({
        image: track.album.images[2].url,
        name: track.name,
        artists: track.artists.map(artist => artist.name).join(', '),
        duration: track.duration_ms,
        uri: track.uri,
      })
    ))
  }

  useEffect(() => {
    query && fetchSong(query)
  }, [query])

  return songList
}