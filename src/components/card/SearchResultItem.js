const millisToMinAndSec = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return [minutes, (seconds < 10 ? '0' : '') + seconds]
}

export default function SearchResultItem({ item }) {
  return (
    <div className="flex flex-row px-4 py-2 items-center hover:bg-gray-600 group">
      <img src={item.image} alt="" className="w-12 h-12" />

      <div className="ml-2 flex w-full justify-between">
        <span className="leading-tight text-sm">
          <h3 className="text-gray-100">{item.name}</h3>
          <p className="text-gray-400 group-hover:text-gray-100">{item.artists}</p>
        </span>
        <span className="text-gray-400 text-xs">
          {millisToMinAndSec(item.duration).join(':')}
        </span>
      </div>
    </div>
  )
}