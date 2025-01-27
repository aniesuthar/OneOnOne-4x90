"use client"
import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import BoxLayout from '@/components/common/Box';
import { careerList } from '@/lib/career-list';
import { Button } from '@/components/ui/button';

const CareerSearch = () => {
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
    const [location, setLocation] = useState('');
    const router = useRouter();
    const pathname = usePathname();


    // Handle search action
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent page reload
        // Update the URL with query params
        const params = new URLSearchParams();
        if (searchTerm) params.set("q", searchTerm);
        if (location) params.set("location", location);
        router.push(`${pathname}?${params.toString()}`);
    };

    // Handle clear action
    const handleClear = () => {
        // Clear the input fields
        setSearchTerm("");
        setLocation("");
        // Remove query parameters from the URL
        router.push(pathname);
    };

    return (
        <form onSubmit={handleSearch}>
            <div className="bg-background flex flex-col lg:flex-row gap-4 items-center p-2">
                <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="!ring-transparent border-0 border-r"
                />
                <Select onValueChange={setLocation}>
                    <SelectTrigger className="!ring-transparent border-0" >
                        <SelectValue placeholder="Select a Location" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {/* <SelectLabel>US States</SelectLabel> */}
                            <SelectItem value="canada">Canada</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {!!(searchParams.get("q") || searchParams.get("location"))
                    &&
                    <Button onClick={handleClear} className="w-full lg:max-w-fit rounded-none size-full px-12 py-2" variant="outline">
                        Clear
                    </Button>
                }
                <Button type="submit" className="w-full lg:max-w-fit rounded-none size-full px-12 py-2" disabled={!(searchTerm || location)}>
                    Go
                </Button>
            </div>
        </form>
    );
};

export default CareerSearch;