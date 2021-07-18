export default function Banner({ header, title, subtitle }) {
  return (
    <div className="relative z-50 mb-12 text-center select-none">
      <p className="text-emerald-600 text-lg font-bold uppercase leading-none">{header}</p>
      <h1 className="text-gray-200 text-6xl font-bold mb-3 sm:mb-4"><span className="capitalize">{title}</span></h1>
      <p className="text-gray-500 text-lg lowercase leading-none">{subtitle}</p>
    </div>
  )
}