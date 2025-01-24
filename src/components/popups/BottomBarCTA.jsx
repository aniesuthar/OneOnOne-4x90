"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button';

export default function BottomBarCTA() {

    const [open, setOpen] = React.useState(false);

    return (
        <div className={cn('fixed inset-x-0 bg-primary text-primary-foreground bottom-0 shadow-md z-50 flex justify-center p-2 gap-6')}>
            <p className='flex flex-col lg:flex-row  justify-center items-center text-lg gap-2 lg:gap-6'>
                Get premium care for your loved ones
                <Button variant="secondary">Get your free consultation</Button>
            </p>
            {/* <div className='bg-primary w-8 text-center content-center text-primary-foreground' onClick={() => setOpen(!open)}>
                {open ?
                    <ChevronRight />
                    :
                    <ChevronLeft />
                }
            </div> */}
        </div>
    )
}
