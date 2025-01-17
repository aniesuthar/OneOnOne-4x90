"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EastIcon from '@mui/icons-material/East';
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


export default function DepratmentsJobList() {
    const { department } = useParams();
    const careerDepartment = careerList.find((dept) => dept.department == department);
    return (
        <div>
            <div className='bg-primary py-24'>
                <BoxLayout className="space-y-4">
                    <h1 className='capitalize text-primary-foreground'>{department}</h1>
                    <div className='bg-background flex items-center p-2'>
                        <Input type="text" placeholder='Search...' className="!ring-transparent border-0 border-r" />
                        <Select>
                            <SelectTrigger className="!ring-transparent border-0" >
                                <SelectValue placeholder="Select a Location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>US States</SelectLabel>
                                    <SelectItem value="argentina">Argentina</SelectItem>
                                    <SelectItem value="La">La</SelectItem>
                                    <SelectItem value="CAL">CAL</SelectItem>
                                    <SelectItem value="NY">NY</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Button className='max-w-fit rounded-none size-full px-12 py-2'>Go</Button>
                    </div>
                </BoxLayout>
            </div>
            <div className='bg-secondary/10 text-primary text-center py-2'>
                <h2 className='font-normal'>Find Your Ideal Career Here</h2>
            </div>
            <div>
                <BoxLayout className="py-6 space-y-4">
                    {careerDepartment.careerList.map((career, i) => (
                        <Link className='block text-primary border-b border-primary py-8' key={i} href={`/career/${department}/${career.id}`}>
                            <div className='flex justify-between'>
                                <h3 className='font-medium'>
                                    {career.title}
                                    <span className='text-sm capitalize p-1 bg-primary text-primary-foreground'>
                                        {careerDepartment.department}
                                    </span>
                                </h3>
                                <span className='text-sm'> ID #{career.id}</span>
                            </div>
                            <p className='text-base font-semibold'><LocationOnIcon /> {career.location}</p>
                            <p className='text-base flex justify-between'>{career.about}  <EastIcon /></p>
                        </Link>
                    ))}
                </BoxLayout>
            </div>
        </div>
    )
}
