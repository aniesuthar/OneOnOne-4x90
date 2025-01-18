"use client"
import BoxLayout from '@/components/common/Box'
import { locationsList } from '@/lib/locations-list'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const { region } = useParams();
    const regionalLocations = locationsList.find((r) => r.region.toLowerCase() == region);
    return (
        <div>
            <div className='bg-primary/20 text-primary pt-40 pb-10'>
                <BoxLayout>
                    <h2 className='capitalize'>{region}</h2>
                    {!regionalLocations?.locations.length ?
                        <p>We're not serving at any locations in {region}</p>
                        :
                        <p>We're serving at {regionalLocations?.locations?.length} locations in {region} </p>
                    }
                </BoxLayout>
            </div>
            <div>
                <BoxLayout className="py-6 lg:py-16">
                    <div className="columns-2 lg:columns-4 text-primary">
                        {regionalLocations?.locations?.map((location) => (
                            <Link
                                href={`/locations${location.link}`}
                                key={location.link}
                                className="block m-2 hover:underline"
                            >
                                {location.name}
                            </Link>
                        ))}
                    </div>
                </BoxLayout>
            </div>
        </div>
    )
}
