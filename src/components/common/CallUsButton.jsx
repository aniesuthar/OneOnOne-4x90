import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export default function CallUsButton({className}) {
    return (
        <Button className={cn("rounded-none p-8 text-md font-bold", className)}>CALL US NOW</Button>
    )
}
