import { useEffect, useState } from 'react'
import useInterval from './useInterval'
import { random } from '@utils/common'

export default function useIntervalRandom(sample, interval) {
  const [picked, setPicked] = useState()

  useEffect(() => {
    setPicked(random(sample))
  }, [])
  
  useInterval(() => {
    setPicked(prevRandom => random(sample, prevRandom))
  }, interval)

  return picked
}