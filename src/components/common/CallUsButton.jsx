import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePopup } from '@/contexts/PopupProvider';
import OfferPopup from '../popups/Offer';

export default function ContactUsButton({ className }) {
    const {showPopup} = usePopup();

    return (
        <Button
            className={cn(
                "rounded-none px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-8 text-sm md:text-md lg:text-lg font-bold",
                className
            )}
            onClick={()=>showPopup(<OfferPopup />, 0)}
        >
            CONTACT US
        </Button>
    );
}

export function CallUsButton({ className }) {
    return (
        <Link href="tel:+123456789" className='inline-block'>
            <Button
                className={cn(
                    "px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-6 text-sm md:text-md lg:text-lg font-bold",
                    className
                )}
            >
                Call Us Now
            </Button>
        </Link>
    );
}