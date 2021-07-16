import { useState, useEffect } from 'react';

export default function useSpotify(query) {
  const [songList, setSongList] = useState([])
  
  const fetchSong = async () => {
    const data = await fetch(`/api/search?query=${query}`)
      .then(response => response.json())

    setSongList([])
    if (data.error) return

    setSongList(data.tracks.items.map(item => ({
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
    query ? fetchSong(query) : setSongList([])
  }, [query])

  return songList
}