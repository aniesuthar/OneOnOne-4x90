"use client"
import React, { useEffect, useState } from 'react';
import LogoImg from "@/assets/images/logo.png";
import { careerMenuList, menuList, NonTransparentHeader } from '@/lib/menu-list';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {CallUsButton} from './CallUsButton';
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
import { Button } from '../ui/button';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [menu, setMenu] = React.useState();
  const [openDropdown, setDropdown] = React.useState();

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  const path = usePathname();
  const onCareer = path.startsWith("/careers") ? true : false;

  React.useEffect(() => {
    if (onCareer) {
      setMenu(careerMenuList);
    } else {
      setMenu(menuList);
    }
  }, [onCareer])

  const haveBg = NonTransparentHeader.some((headerPath) => path.startsWith(headerPath));

  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 160) {
        setScrolledEnough(true);
      } else {
        setScrolledEnough(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav
    className={cn(
      'p-2 bg-transparent top-0 left-0 right-0 transition-all duration-300', // Smooth transition for all properties
      scrolledEnough ? 'fixed animate-slideDown bg-primary-foreground p-0 shadow-md' : 'absolute top-0', // Adjust height and positioning for sticky and absolute
      haveBg && 'static'
    )}
    >
      <Box className="flex justify-between text-primary" >
        {/* Logo Section */}
        <div className='logo-cont'>
          <Link className='logo-cont mb-4 lg:mb-0' href="/">
            <img src={LogoImg.src} className='w-16 lg:w-20' alt="Logo" />
          </Link>
        </div>

        <div className='flex items-center gap-12'>
          {/* Navigation Menu */}
          <div className='hidden md:flex nav-cont flex-wrap justify-center gap-8 w-full lg:w-auto items-center font-bold text-sm lg:text-base'>
            {menu?.map((menuItem, index) => (
              menuItem.hasChildren ? (
                <HoverCard key={index} openDelay={0} closeDelay={200}>
                  <HoverCardTrigger>
                    <span className='menu-item cursor-pointer py-2'>{menuItem.title}</span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit font-normal space-y-1 text-xs hoverCard hoverCard[&::after]:shadow-md [&>*]:border-b last:[&>*]:border-b-0">
                    {menuItem.children.map((item, idx) => (
                      <Link key={idx} className='block border-border/10 py-2' href={item.href}>
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
          <div className='hidden action-btn-cont md:flex flex-col lg:flex-row items-center gap-12 mt-4 lg:mt-0'>
            {onCareer ?
              <Link href="/"><Button variant="secondary" >Go to Main site</Button> </Link>
              :
              <>
                <div className='call-num text-center hidden xl:block lg:text-left'>
                  <span className='block text-xs lg:text-sm'>Call us <b>toll-free</b> any time 24/7</span>
                  <h2 className='block text-lg lg:text-2xl font-bold'>1-877-588-8609</h2>
                </div>
                <div className='call-btn hidden lg:block'>
                  <CallUsButton />
                </div>
              </>
            }
          </div>

          {/* Mobile  */}

          <div className='flex md:hidden'>
            <Link href="tel:1-877-588-8609" className='mr-4 p-2 flex items-center justify-center rounded-xl bg-primary text-primary-foreground'>
              <PhoneIcon />
            </Link>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger > <MenuIcon /> </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Link className='logo-cont mb-4 lg:mb-0' href="/">
                      <img src={LogoImg.src} className='w-16 lg:w-20 mb-4' alt="Logo" />
                    </Link>
                  </SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>

                {menu?.map((menuItem, index) => (
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

                {onCareer &&
                  <Link href="/" className='mt-10 inline-block'><Button variant="secondary" >Go to Main site</Button> </Link>
                }

              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Box>
    </nav>
  );
}
