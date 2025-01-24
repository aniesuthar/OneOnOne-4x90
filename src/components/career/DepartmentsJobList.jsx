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
import CareerSearch from '@/components/career/CareerSearch';


export default function DepratmentsJobList({ departmentData, loading }) {
    const { name: department, slug, careers } = departmentData;
    const departmentSlug = slug?.current;
    // const { department } = useParams();
    // const careerDepartment = careerList.find((dept) => dept.department == department);
    return (
        <div>
            {/* <div className='bg-primary py-12 lg:py-24'>
                <BoxLayout className="space-y-4">
                    <h1 className='capitalize text-primary-foreground'>{department}</h1>
                    <CareerSearch />
                </BoxLayout>
            </div> */}
            {loading ?
                <BoxLayout className="text-center p-4 min-h-[220px]">
                    <p>Loading...</p>
                </BoxLayout>
                :
                !departmentData.careers.length ?
                    <BoxLayout className="text-center p-4 min-h-[220px]">
                        <p>No Results to show!</p>
                    </BoxLayout>
                    :
                    <>
                        <div className='bg-secondary/10 text-primary text-center py-4'>
                            <h2 className='font-normal'>Find Your Ideal Career Here</h2>
                        </div>
                        <div>
                            <BoxLayout className="py-6 space-y-4">
                                {careers.map((career, i) => (
                                    <Link className='block text-primary border-b border-primary py-8 space-y-4' key={i} href={`/careers/${departmentSlug}/${career.id.current}`}>
                                        <div className='flex justify-between flex-col lg:flex-row '>
                                            <h3 className='font-medium'>
                                                {career.title}
                                                <span className='text-sm capitalize p-1 bg-primary text-primary-foreground'>
                                                    {department}
                                                </span>
                                            </h3>
                                            <span className='text-sm'> ID #{career.id.current}</span>
                                        </div>
                                        <p className='text-base font-semibold'><LocationOnIcon /> {career.location}</p>
                                        <p className='text-base flex flex-col lg:flex-row gap-4 justify-between'>{career.about}  <EastIcon className='ml-auto' /></p>
                                    </Link>
                                ))}
                            </BoxLayout>
                        </div>
                    </>
            }
        </div>
    )
}
