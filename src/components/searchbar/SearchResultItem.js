import { millisToMinAndSec } from '@utils/common'
import { useAudioPlayer } from '@contexts/AudioPlayerContext'

import Image from 'next/image'
import PlayIcon from '@components/common/icons/PlayIcon'
import PauseIcon from '@components/common/icons/PauseIcon'

export default function SearchResultItem({ item }) {
  const audioPlayer = useAudioPlayer()

  return (
    <button
      onClick={() => audioPlayer.play(item.preview)}
      className="px-4 py-2 w-full group hover:bg-gray-700 hover:bg-opacity-40 group"
    >
      <div className="flex flex-row items-center">
        <div className="relative flex-none w-12 h-12 group">
          <div className="group-hover:opacity-30">
            <Image
              src={item.image}
              layout="fill"
              placeholder="blur"
              blurDataURL={item.image}
              alt=""
            />
          </div>
          <div className="absolute inset-0 flex transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 text-white">
            {(audioPlayer.song == item.preview) ?
              <PauseIcon className="w-4 h-4 m-auto" /> :
              <PlayIcon className="w-4 h-4 m-auto" />
            }
          </div>
        </div>

        <div className="ml-4 flex w-full justify-between">
          <span className="text-left leading-tight text-sm">
            <h3 className="text-gray-100">{item.name}</h3>
            <p className="text-gray-400 group-hover:text-gray-100">{item.artists}</p>
          </span>
          <span className="text-gray-400 text-xs ml-4">
            {millisToMinAndSec(item.duration).join(':')}
          </span>
        </div>
      </div>
    </button>
  )
}