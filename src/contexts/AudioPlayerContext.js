import { createContext, useContext, useEffect, useRef, useState } from 'react'

const DEFAULT_VOLUME = 0.1

const AudioPlayerContext = createContext(null)

export const AudioPlayerProvider = ({ children }) => {
  const audioRef = useRef(null)
  const [song, setSong] = useState(null)

  // initialize Audio instance on mount
  useEffect(() => {
    const audio = new Audio()
    audio.volume = DEFAULT_VOLUME
    audioRef.current = audio
  }, [])

  const play = (song) => {
    const audio = audioRef.current
    if (audio.src == song) {
      audio.pause()
      setSong(null)
    } else {
      audio.src = song
      audio.play()
      setSong(song)
    }
  }

  return (
    <AudioPlayerContext.Provider value={{ song, play }}>
      {children}
    </AudioPlayerContext.Provider>
  )
}

export const useAudioPlayer = () => useContext(AudioPlayerContext)