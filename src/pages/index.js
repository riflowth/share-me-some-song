import WebWrapper from '@components/common/WebWrapper'
import WebContent from '@components/common/WebContent'
import Banner from '@components/banner/Banner'
import SearchBar from '@components/searchbar/SearchBar'

export default function IndexPage() {
  return (
    <WebWrapper>
      <WebContent>
        <Banner />
        <SearchBar />
      </WebContent>
    </WebWrapper>
  )
}
