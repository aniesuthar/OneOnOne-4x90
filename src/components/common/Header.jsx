"use client"
import React from 'react';
import LogoImg from "@/assets/images/logo.png";
import { menuList, NonTransparentHeader } from '@/lib/menu-list';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CallUsButton from './CallUsButton';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MenuIcon from '@mui/icons-material/Menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import PhoneIcon from '@mui/icons-material/Phone';
import Box from './Box';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  const path = usePathname();
  const haveBg = NonTransparentHeader.some((headerPath) => path.startsWith(headerPath));

  return (
    <nav className={cn('p-2 bg-transparent absolute top-0 left-0 right-0', haveBg && 'static')}>
      <Box className="flex justify-between" >
        {/* Logo Section */}
        <div className='logo-cont'>
          <Link className='logo-cont mb-4 lg:mb-0' href="/">
            <img src={LogoImg.src} className='w-16 lg:w-20' alt="Logo" />
          </Link>
        </div>

        <div className='flex items-center gap-8'>
          {/* Navigation Menu */}
          <div className='hidden lg:flex nav-cont flex-wrap justify-center gap-4 lg:gap-8 w-full lg:w-auto items-center font-bold text-sm lg:text-base'>
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
          <div className='hidden action-btn-cont lg:flex flex-col lg:flex-row items-center gap-8 mt-4 lg:mt-0'>
            {/* <div className='call-num text-center lg:text-left'>
              <span className='block text-sm lg:text-base'>Call us <b>toll-free</b> any time 24/7</span>
              <h2 className='block text-secondary text-lg lg:text-2xl font-bold'>1-877-588-8609</h2>
            </div> */}
            <div className='call-btn'>
              <CallUsButton />
            </div>
          </div>

          {/* Mobile  */}

          <div className='flex sm:hidden'>
            <Link href="tel:1-877-588-8609" className='mr-4 p-2 flex items-center justify-center rounded-xl bg-primary text-primary-foreground'>
              <PhoneIcon />
            </Link>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger > <MenuIcon /> </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Link className='logo-cont mb-4 lg:mb-0' href="/">
                      <img src={LogoImg.src} className='w-16 lg:w-20' alt="Logo" />
                    </Link>
                  </SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>

                {menuList.map((menuItem, index) => (
                  menuItem.hasChildren ? (
                    <Accordion type="single" collapsible key={index}>
                      <AccordionItem value={`item-${index}`} className="border-0">
                        <AccordionTrigger className="text-base hover:no-underline py-1"> <span className='menu-item cursor-pointer'>{menuItem.title}</span></AccordionTrigger>
                        <AccordionContent className="pl-2">
                          {menuItem.children.map((item, idx) => (
                            <Link key={idx} className='block py-1 hover:underline' href={item.href} onClick={closeSheet}
                            >
                              - {item.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link key={index} className='block hover:underline py-1' href={menuItem.href} onClick={closeSheet}
                    >
                      {menuItem.title}
                    </Link>
                  )
                ))}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Box>
    </nav>
  );
}
