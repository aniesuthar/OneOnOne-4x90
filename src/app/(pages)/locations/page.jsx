import React from 'react'
import Link from 'next/link'
import BoxLayout from '@/components/common/Box'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LocationOn, West } from '@mui/icons-material'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { locationsList } from "@/lib/locations-list"


export default function page() {
    // const locations = locationsList.find((lc)=>lc.region == "Ontario");
    return (
        <div>
            <div className='bg-primary/40 min-h-[50vh]'>
                <BoxLayout>
                    Map
                </BoxLayout>
            </div>
            <div>
                <BoxLayout className="space-y-8">
                    <div className='flex gap-4 -translate-y-1/2 justify-center'>
                        <div className='bg-primary p-2 flex '>
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
                    <Tabs defaultValue="canada" className=" max-w-[840px] m-auto">
                        <TabsList className="block m-auto w-fit mb-12">
                            <TabsTrigger value="canada">Canada Locations</TabsTrigger>
                            <TabsTrigger value="us">US Locations</TabsTrigger>
                        </TabsList>
                        <TabsContent value="canada" className="m-auto space-y-4">
                            {locationsList.map((area) => (
                                <React.Fragment>
                                    <h3>{area.region}</h3>
                                    <div className="columns-2 lg:columns-4 text-primary">
                                        {area.locations?.map((location) => (
                                            <Link
                                                href={`/locations${location.link}`}
                                                key={location.link}
                                                className="block m-2 hover:underline"
                                            >
                                                {location.name}
                                            </Link>
                                        ))}
                                    </div>
                                </React.Fragment>
                            ))
                            }
                        </TabsContent>
                        <TabsContent value="us">
                            Make changes to your account here.
                        </TabsContent>
                    </Tabs>
                </BoxLayout>
            </div>
        </div>
    )
}
