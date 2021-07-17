import moment from 'moment'

global.spotify = global.spotify || {}

export const refreshToken = async () => {
  const authorization = Buffer
    .from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)
    .toString('base64')

  const data = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${authorization}`
    },
    body: 'grant_type=client_credentials',
  }).then(response => response.json())

  const timestamp = moment()
  global.spotify.token = data.access_token
  global.spotify.last_token_timestamp = timestamp.toDate()
  global.spotify.token_expires_in = data.expires_in

  console.log(`[Spotify] generate new token, expires on ${timestamp.add(data.expires_in, 'second')}`)
}

export const checkToken = async () => {
  const lastTokenTimestamp = global.spotify.last_token_timestamp
  const tokenExpiresIn = global.spotify.token_expires_in

  const needRefresh = (!lastTokenTimestamp ||
    moment().diff(moment(lastTokenTimestamp), 'second') >= tokenExpiresIn)

  if (needRefresh) return refreshToken()
}

export const fetchSpotify = async (url) => {
  await checkToken()

  return fetch(encodeURI(url), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${global.spotify.token}`
    }
  }).then(response => response.json())
}