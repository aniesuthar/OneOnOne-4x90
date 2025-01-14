import React from 'react';
import LogoImg from "@/assets/images/logo.png";
import { menuList } from '@/lib/menu-list';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CallUsButton from './CallUsButton';

export default function Header() {
  return (
    <nav className='flex flex-col lg:flex-row p-4 lg:px-8 items-center lg:justify-between'>
      {/* Logo Section */}
      <div className='logo-cont mb-4 lg:mb-0'>
        <img src={LogoImg.src} className='w-16 lg:w-20' alt="Logo" />
      </div>

      {/* Navigation Menu */}
      <div className='nav-cont flex flex-wrap justify-center gap-4 lg:gap-8 w-full lg:w-auto items-center uppercase font-bold text-sm lg:text-base'>
        {menuList.map((menuItem, index) => (
          menuItem.hasChildren ? (
            <HoverCard key={index} openDelay={0} closeDelay={200}>
              <HoverCardTrigger>
                <span className='menu-item cursor-pointer'>{menuItem.title}</span>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit font-medium space-y-2 text-sm">
                {menuItem.children.map((item, idx) => (
                  <Link key={idx} className='block hover:underline' href={item.href}>
                    {item.title}
                  </Link>
                ))}
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Link key={index} className='hover:underline' href={menuItem.href}>
              {menuItem.title}
            </Link>
          )
        ))}
      </div>

      {/* Action Buttons */}
      <div className='action-btn-cont flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0'>
        <div className='call-num text-center lg:text-left'>
          <span className='inline-block text-sm lg:text-base'>Call us <b>toll-free</b> any time 24/7</span>
          <h2 className='inline-block text-secondary text-lg lg:text-xl font-bold'>1-877-588-8609</h2>
        </div>
        <div className='call-btn'>
          <CallUsButton />
        </div>
      </div>
    </nav>
  );
}
