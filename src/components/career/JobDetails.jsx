"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BoxLayout from '@/components/common/Box';
import { Button } from '@/components/ui/button';
import { careerList } from '@/lib/career-list';

export default function JobDetails() {
    const { department, jobId } = useParams();
    const depratmentsCarrerList = careerList.find((dept) => dept.department == department)
    const job = depratmentsCarrerList.careerList.find((career) => career.id == jobId)
    return (
        <div>
            {job ?
                <React.Fragment>

                    <div className='bg-primary py-16'>
                        <BoxLayout>
                            <div className='text-primary-foreground font-normal space-y-4'>
                                <h2>{job.title}</h2>
                                <p className='text-base font-semibold'><LocationOnIcon /> {job.location}</p>
                                <p>{job.about}</p>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-4  lg:gap-8 items-start lg:items-center pt-8'>
                                <Button className='max-w-fit rounded-none size-full px-12 py-4' variant="secondary">Call 1-877-355-3660</Button>
                                <Button className='max-w-fit rounded-none size-full px-12 py-4' variant="secondary">Apply Now</Button>
                            </div>
                        </BoxLayout>
                    </div>
                    <BoxLayout className="py-12">
                        {
                            !!job.body?.length ?
                                <div
                                    className="prose max-w-none text-primary career-body"
                                    dangerouslySetInnerHTML={{ __html: job.body }}
                                />
                                :
                                <p>No Details to show!</p>
                        }
                    </BoxLayout>
                </React.Fragment>
                :
                <BoxLayout className="py-12 text-center">
                    <p>No such career to show!</p>
                </BoxLayout>
            }
        </div>
    )
}
