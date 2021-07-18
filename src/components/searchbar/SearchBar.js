import MagnifyingGlassIcon from '@components/common/icons/MagnifyingGlassIcon'
import SearchResultList from './SearchResultList'

export default function SearchBox({ searchKey, setSearchKey, result }) {
  return (
    <div className="relative max-w-sm sm:max-w-lg w-full mx-auto select-none">
      <div className="relative z-10 p-4 transition-shadow duration-500 ease-out shadow-xl hover:shadow-2xl ring-2 ring-white ring-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
        <div className="flex flex-row items-center">
          <span className="absolute text-gray-500 ml-2">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </span>

          <input
            type="text"
            className="w-full pl-8 pr-2 py-1 bg-gray-800 bg-opacity-40 focus:outline-none text-gray-300 rounded-lg rounded-tr-none rounded-br-none"
            onChange={(e) => setSearchKey(e.target.value)}
            value={searchKey}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />

          <button
            type="button"
            className="px-4 py-1 bg-gray-800 hover:bg-opacity-80 text-gray-400 focus:ring-0 text-base font-semibold rounded-tr-lg rounded-br-lg bg-transparent"
          >
            SEND
          </button>
        </div>
      </div>

      <SearchResultList result={result} />

      {/* decorations */}
      <div className="absolute inset-0 z-0 opacity-70">
        <div style={{ borderRadius: '34% 66% 31% 69% / 66% 76% 24% 34%' }} className="absolute -top-1/2 -left-14 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-emerald-400 to-blue-700 filter blur-sm" />
        <div style={{ borderRadius: '73% 27% 31% 69% / 66% 49% 51% 34%' }} className="absolute -bottom-20 -right-16 w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-gradient-to-l from-emerald-300 to-blue-600 filter blur-sm" />
      </div>
    </div>
  )
}