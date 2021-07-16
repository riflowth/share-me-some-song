import SearchBar from './SearchBar'

export default function Card() {
  return (
    <div className="relative max-w-lg w-full mx-6">
      <div className="relative z-20 select-none flex flex-col flex-grow p-4 bg-gradient-to-br from-gray-800 to-transparent transition-all duration-500 ease-out shadow-xl hover:shadow-2xl ring-1 ring-gray-700 ring-opacity-10 transform scale-100">
        <p className="text-xs text-gray-400 tracking-widest">SHARE YOUR FEELINGS</p>
        <h2 className="font-semibold text-lg text-gray-200">SHARE YOUR SONG</h2>

        <SearchBar />
      </div>

      {/* decorations */}
      <div className="absolute z-10 -top-1/2 -left-14 w-36 h-36 rounded-full bg-gradient-to-tr from-gray-700 to-transparent filter blur-lg" />
      <div className="absolute z-10 -bottom-20 -right-16 w-64 h-64 rounded-full bg-gradient-to-bl from-gray-700 to-transparent filter blur-xl" />
      <div className="absolute z-10 -bottom-52 -left-4 w-52 h-52 rounded-full bg-gradient-to-tr from-gray-800 to-transparent filter blur-2xl" />
    </div>
  )
}