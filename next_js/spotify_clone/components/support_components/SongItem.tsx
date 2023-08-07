import useLoadImage from '@/hooks/useLoadImage'
import { SongItemProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SongItem = ({data,onClick}:SongItemProps) => {
  const imagePath = useLoadImage(data)
  console.log(imagePath)

  return (
    <div onClick={()=>onClick(data.id)} className='relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3'>
      <div className='relative aspect-square w-full h-full rounded-md overflow-hidden'>
        <Image className='object-cover' priority src={imagePath || '/image/liked.png'} fill alt='Image'/>
      </div>
    </div>
  )
}

export default SongItem