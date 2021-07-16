import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import SearchResultItem from './SearchResultItem'

export default function SearchResultList({ show, result }) {
  return (
    <Transition
      as={Fragment}
      show={show}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 -translate-y-4"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-100"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95 -translate-y-4"
    >
      <div className="absolute mt-2 py-2 w-full bg-gray-700">
        {result.map(item => (
          <SearchResultItem key={item.uri} item={item} />
        ))}
      </div>
    </Transition>
  )
}