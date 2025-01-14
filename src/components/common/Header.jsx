import React from 'react'
import LogoImg from "@/assets/images/logo.png"
import { menuList } from '@/lib/menu-list'
import Link from 'next/link'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '../ui/button'
import CallUsButton from './CallUsButton'


export default function Header() {
  return (
    <nav className='flex p-4 px-8 items-center'>
      <div className='logo-cont'>
        <img src={LogoImg.src} className='w-20' />
      </div>
      <div className='nav-cont flex justify-center gap-8 w-full items-center uppercase font-bold'>
        {menuList.map((menuItem) => (
          menuItem.hasChildren ?
            <HoverCard openDelay={0} closeDelay={200}>
              <HoverCardTrigger > <span className='menu-item' href={menuItem.href} >{menuItem.title}</span> </HoverCardTrigger>
              <HoverCardContent>
                {menuItem.children.map((item) => <Link href={menuItem.href} >{item.title} </Link>)}

              </HoverCardContent>
            </HoverCard>
            :
            <Link href={menuItem.href} >{menuItem.title}</Link>
        ))}
      </div>
      <div className='action-btn-cont flex gap-4 items-center'>
        <div className='call-num'>
          <span className='inline-block'>Call us <b>toll-free</b> any time 24/7</span>
          <span className='inline-block text-secondary'><h2> 1-877-588-8609 </h2></span>
        </div>
        <div className='call-btn'>
          <CallUsButton/>
        </div>
      </div>
    </nav>
  )
}
