import JobDetails from '@/components/career/JobDetails'
import BoxLayout from '@/components/common/Box'
import JobApplicationForm from '@/components/common/JobApplicationForm'
import { getCareerPostById } from '@/lib/sanity/sanity-utils';
import React from 'react'

export default async function page({ params }) {

    const jobDetails = await getCareerPostById(params.jobId);

    return (
        <React.Fragment>
            <JobDetails job={jobDetails} />
            <div className='bg-secondary/10'>
                <BoxLayout className="text-primary py-10 space-y-8 lg:space-y-16">
                    <h2 className='lg:text-center font-medium'>Start Your Career Right</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20'>
                        {[
                            {
                                title: "Premium Employer",
                                desc: "We pay you what you’re worth, and then some. We review compensation throughout the year to pay top of market so you are well taken care of for the contribution you make."
                            },
                            {
                                title: "Training and Support Network",
                                desc: "Hands-on training, mentorship and continued access to online learning help set you up for success. We also provide mentoring to support the development of self-led leaders."
                            },
                            {
                                title: "Caregiving as a Career",
                                desc: "We believe in Caregiving as a Career, and in providing both growth opportunities and a culture in which you thrive and love coming to work."
                            },
                            {
                                title: "A Culture of Bold Kindness",
                                desc: "At One-On-One, we are kind and care about each other. We give 110% to everything we do. We’re not afraid to speak our mind or make mistakes. We believe everyone’s contribution matters."
                            },
                        ].map((item) => (
                            <div className='text-primary space-y-2'>
                                <h3>{item.title}</h3>
                                <p className='text-base'>{item.desc}</p>
                            </div>
                        ))
                        }
                    </div>
                </BoxLayout>
            </div>
            <div className='bg-primary py-20' id="applicationForm">
                <BoxLayout className="application-form space-y-10">
                    <h2 className='font-medium text-center text-primary-foreground'>Apply Now</h2>
                    <JobApplicationForm destination={params} />
                </BoxLayout>
            </div>
        </React.Fragment>
    )
}
