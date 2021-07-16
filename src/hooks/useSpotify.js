import { useState, useEffect } from 'react';

export default function useSpotify(query, limit) {
  const [songList, setSongList] = useState([])

  // https://developer.spotify.com/console/get-search-item/
  const fetchSong = async () => {
    const data = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track&offset=0&limit=${limit}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_TOKEN}`
        }
      })
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