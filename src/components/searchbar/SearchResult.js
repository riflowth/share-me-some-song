import { Transition } from '@headlessui/react'

import SearchResultItem from './SearchResultItem'

export default function SearchResult({ result }) {
  return (
    <Transition
      as="div"
      className="absolute z-10 w-full mt-2 py-2 backdrop-filter backdrop-blur-lg ring-2 ring-gray-500 ring-opacity-10 rounded-lg"
      show={result.length != 0}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 -translate-y-4"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-100"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95 -translate-y-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-transparent opacity-25 rounded-lg" />
      <div className="relative ">
        {result.map(item => (
          <SearchResultItem key={item.uri} item={item} />
        ))}
      </div>
    </Transition>
  )
}