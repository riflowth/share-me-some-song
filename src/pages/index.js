import useIntervalRandom from '@hooks/useIntervalRandom'
import useSpotify from '@hooks/useSpotify'
import { AudioPlayerProvider } from '@contexts/AudioPlayerContext'

import WebWrapper from '@components/common/WebWrapper'
import WebContent from '@components/common/WebContent'
import Banner from '@components/banner/Banner'
import SearchBar from '@components/searchbar/SearchBar'

const feelings = ['happiness', 'love', 'excitement', 'lonely', 'heartbroken', 'hopeless', 'stressed', 'frustrated']

export default function IndexPage() {
  const feeling = useIntervalRandom(feelings, 2000)
  const [songs, search] = useSpotify()

  return (
    <WebWrapper>
      <WebContent>
        <Banner
          header="share your"
          title={feeling}
          subtitle="into my spotify playlist"
        />

        <AudioPlayerProvider>
          <SearchBar
            search={search}
            result={songs}
          />
        </AudioPlayerProvider>
      </WebContent>
    </WebWrapper>
  )
}
