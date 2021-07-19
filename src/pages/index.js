import { useState } from 'react'
import useIntervalRandom from '@hooks/useIntervalRandom'
import useSpotify from '@hooks/useSpotify'

import WebWrapper from '@components/common/WebWrapper'
import WebContent from '@components/common/WebContent'
import Banner from '@components/banner/Banner'
import SearchBar from '@components/searchbar/SearchBar'

const feelings = ['happiness', 'love', 'excitement', 'lonely', 'heartbroken', 'hopeless', 'stressed', 'frustrated']

export default function IndexPage() {
  const [searchKey, setSearchKey] = useState('')
  const feeling = useIntervalRandom(feelings, 2000)
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
        >
          
        </SearchBar>
      </WebContent>
    </WebWrapper>
  )
}
