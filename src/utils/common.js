export const millisToMinAndSec = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return [minutes, (seconds < 10 ? '0' : '') + seconds]
}

export const random = (sample, exclude) => {
  if (exclude) {
    return sample.filter(element => (element != exclude))[Math.floor(Math.random() * (sample.length - 1))]
  }

  return sample[Math.floor(Math.random() * sample.length)]
}