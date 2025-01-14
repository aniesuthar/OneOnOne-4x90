import React from 'react'
import CheckMark from "@/assets/images/check.png"

export default function CheckPoint({text}) {
  return (
    <div className='flex  gap-2 items-center my-2'>
        <img src={CheckMark.src}/>
        <span className='text-xl'> {text || "Add text"}</span>
    </div>
  )
}
