import React from 'react'
import CheckMark from "@/assets/images/icons/Icon.png"
import { cn } from '@/lib/utils'

export default function CheckPoint({text, textSize}) {
  return (
    <div className='flex  gap-2 items-center my-2'>
        <img src={CheckMark.src}/>
        <span className={cn('text-xl', textSize)}> {text || "Add text"}</span>
    </div>
  )
}
