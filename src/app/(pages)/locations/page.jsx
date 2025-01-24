import React from 'react'
import Link from 'next/link'
import BoxLayout from '@/components/common/Box'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LocationOn, West } from '@mui/icons-material'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { locationsList } from "@/lib/locations-list"
import HereMapWithCircle, { MapWithMarkers } from '@/components/common/Map'


export default function page() {

    // const locations = [
    //     { lat: 52.5200, lng: 13.4050, title: "Berlin" },
    //     { lat: 48.8566, lng: 2.3522, title: "Paris" },
    //     { lat: 40.7128, lng: -74.0060, title: "New York" },
    // ];

    const locations = locationsList[0].locations;

    return (
        <div>
            <div className='bg-primary/40 h-[460px] min-h-[360px]'>
                <MapWithMarkers locations={locations} />
            </div>
            <div>
                <BoxLayout className="space-y-8 z-10 relative">
                    <div className='flex flex-col lg:flex-row gap-4 -translate-y-7 lg:-translate-y-1/2 justify-center'>
                        <div className='bg-primary p-2 flex flex-col lg:flex-row gap-4 lg:gap-0'>
                            <Input placeholder="Where do you need care?" className="lg:min-w-72" />
                            <Button> <LocationOn /> Use my location </Button>
                        </div>
                        <Button variant="secondary" className="py-7"><West /> See Locations List </Button>
                    </div>
                    <p className='text-center text-base'>Senior home health care is available in the communities surrounding each of these Nurse Next Door locations.</p>
                </BoxLayout>
            </div>
            <div>
                <BoxLayout className="py-20">
                    <div className='max-w-[840px] m-auto'>

                        {/* <Tabs defaultValue="canada" className=" max-w-[840px] m-auto">
                        <TabsList className="block m-auto w-fit mb-12">
                            <TabsTrigger value="canada">Canada Locations</TabsTrigger>
                            <TabsTrigger value="us">US Locations</TabsTrigger>
                        </TabsList> */}
                        {/* <TabsContent value="canada" className="m-auto space-y-4"> */}
                        {locationsList.map((area, i) => (
                            <React.Fragment key={i}>
                                <h3 className='mb-4'>{area.region}</h3>
                                <div className="columns-2 lg:columns-4 text-primary">
                                    {area.locations?.map((location) => (
                                        <Link
                                            href={`/locations${location.link}`}
                                            key={location.link}
                                            className="block mb-2 hover:underline bg-primary/5 hover:bg-primary/10 px-2 py-1 border-l border-primary"
                                        >
                                            {location.name}
                                        </Link>
                                    ))}
                                </div>
                            </React.Fragment>
                        ))
                        }
                        {/* </TabsContent> */}
                        {/* <TabsContent value="us">
                        Make changes to your account here.
                    </TabsContent> */}
                        {/* </Tabs> */}
                    </div>
                </BoxLayout>
            </div>
        </div>
    )
}
