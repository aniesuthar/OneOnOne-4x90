import React from 'react'
import BoxLayout from '../common/Box'
import MapImage from "@/assets/images/map.png";
import HereMap from "@/components/common/Map";
import { Input } from '../ui/input';
import Script from "next/script";
import HereMapWithCircle from '@/components/common/Map';



export default function HomeOne2() {
    return (
        <div>
            <BoxLayout className="flex flex-col lg:flex-row">
                {/* Location Input Section */}
                <div className='w-full lg:w-2/5 py-6 lg:py-12 space-y-4 z-10 lg:pr-24 content-center'>
                    <h5 className='text-center lg:text-left'>Find your local Nurse Next Door</h5>
                    <h2 className='text-2xl lg:text-4xl text-center lg:text-left'>Where do you need care?</h2>
                    <Input
                        className="border-primary border-2 lg:border-8 rounded-md lg:rounded-none p-4 lg:p-8"
                        placeholder="Find location by ZipCode"
                        type="search"
                    />
                </div>
                {/* Map Section */}
                <div
                    className='bg-cover w-full lg:w-3/5 h-60 lg:h-96 z-10'
                    // style={{ backgroundImage: `url(${MapImage.src})` }}
                    id="map"
                >
                    <HereMapWithCircle
                        center={{ lat: 37.7749, lng: -122.4194 }} // Replace with desired coordinates
                        radius={2000} // Radius in meters
                    />
                </div>
            </BoxLayout>
        </div>
    )
}

