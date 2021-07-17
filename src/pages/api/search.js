import { fetchSpotify } from '@services/SpotifyService';

const DEFAULT_LIMIT = 4

// https://developer.spotify.com/console/get-search-item/
export default async function handler(req, res) {
  let { query, limit } = req.query

  if (!query) {
    return res.status(400).json({
      error: 'invalid_request',
      error_description: 'Invalid query'
    })
  }

  if (!limit) limit = DEFAULT_LIMIT

  const data = await fetchSpotify(`https://api.spotify.com/v1/search?q=${query}&type=track&offset=0&limit=${limit}`)

  data.tracks.items.forEach(item => {
    delete item.album.available_markets
    delete item.available_markets
  })

  res.status(200).json(data)
}