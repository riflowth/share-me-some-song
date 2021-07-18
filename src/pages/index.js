import { useState } from 'react'
import { excludeRandom } from '@utils/common'
import useInterval from '@hooks/useInterval'
import useSpotify from '@hooks/useSpotify'

import WebWrapper from '@components/common/WebWrapper'
import WebContent from '@components/common/WebContent'
import Banner from '@components/banner/Banner'
import SearchBar from '@components/searchbar/SearchBar'

const feelings = ['happiness', 'love', 'excitement', 'lonely', 'heartbroken', 'hopeless', 'stressed', 'frustrated']
const randomFeeling = (current) => excludeRandom(feelings, current)

export default function IndexPage() {
  const [feeling, setFeeling] = useState('happiness')
  useInterval(() => setFeeling(prevFeeling => randomFeeling(prevFeeling)), 2000)

  const [searchKey, setSearchKey] = useState('')
  const songs = useSpotify(searchKey)

  return (
    <WebWrapper>
      <WebContent>
        <Banner
          header="share your"
          title={feeling}
          subtitle="into my spotify playlist"
        />

        <SearchBar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          result={songs}
        />
      </WebContent>
    </WebWrapper>
  )
}
