"use client"
import React from 'react'
import { ChevronRight } from '@mui/icons-material'
import defaults from '@/lib/defaults';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';

export default function FixedSideContact() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className={cn('fixed bg-white shadow-md z-50 right-0 top-48 translate-x-[calc(100%-2rem)] flex -ml-40 transition-transform', open && "translate-x-0")}>
            <div className='bg-primary w-8 text-center content-center text-primary-foreground' onClick={() => setOpen(!open)}>
                {open ?
                    <ChevronRight />
                    :
                    <ChevronLeft />
                }
            </div>
            <div className='bg-primary/10 p-4 text-primary space-y-4 [&>div>p]:text-sm'>
                <div>
                    <p className='font-semibold'>Get a free Caring Consult today</p>
                    <p>We’re open <b>24/7.</b> So you can call us now</p>
                </div>
                <div>
                    <h5>Call: {defaults.CONTACT_NO}</h5>
                    <p className='mb-2'>or</p>
                    <Button variant="secondary">Book a Call for Later</Button>
                </div>
            </div>
        </div>
    )
}
