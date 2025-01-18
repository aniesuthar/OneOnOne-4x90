import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export default function ContactUsButton({ className }) {
    return (
        <Button
            className={cn(
                "rounded-none px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-8 text-sm md:text-md lg:text-lg font-bold",
                className
            )}
        >
            CONTACT US
        </Button>
    );
}

export function CallUsButton({ className }) {
    return (
        <Button
            className={cn(
                "rounded-none px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-8 text-sm md:text-md lg:text-lg font-bold",
                className
            )}
            variant="secondary"
        >
            Call Us Now
        </Button>
    );
}