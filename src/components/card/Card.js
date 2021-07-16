import SearchBar from './SearchBar'

export default function Card() {
  return (
    <div className="flex flex-grow max-w-lg w-full mx-6 p-4 bg-gray-800 select-none">
      <div className="flex flex-col w-full">
        <p className="text-sm text-gray-400 tracking-widest">SHARE YOUR FEELINGS</p>
        <h2 className="font-semibold text-lg text-gray-200">SHARE YOUR SONG</h2>

        <SearchBar />
      </div>
    </div>
  )
}