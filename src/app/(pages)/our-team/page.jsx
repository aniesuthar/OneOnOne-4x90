import BoxLayout from '@/components/common/Box'
import { CallUsButton } from '@/components/common/CallUsButton'
import ImageCards from '@/components/common/ImageCard'
import HeroSection from '@/components/common/SectionComponents'
import HeadingSection from '@/components/common/SectionComponents'
import React from 'react'
import Img1 from "@/assets/images/service-hero.png";    
import CaringJournal from '@/components/services/CaringJournal'

import T1 from "@/assets/images/t1.png"
import T2 from "@/assets/images/t2.png"
import T3 from "@/assets/images/t2.png"
import T4 from "@/assets/images/t4.png"
import T5 from "@/assets/images/t5.jpg"


export default function page() {
    const cardData = [
        {
            title: "Care Designers",
            img: T1.src,
            desc: "Our experienced Care Designers evaluate your loved one’s needs during the initial Caring Consult. By getting to know Mom or Dad, they can reassess services as health and care requirements change over time."
        },
        {
            title: "Caregivers",
            img: T2.src,
            desc: "We select caregivers or nurses based on their personality, languages, and hobbies shared with each senior for ongoing companionship that makes a difference."
        },
        {
            title: "24/7 Care Team",
            img: T3.src,
            desc: "From your first visit onwards, our Care Team is available 24/7 to provide monitoring services, respond to immediate change requests, and make sure caregivers are always available as scheduled."
        },
    ]

    return (
        <div>
            <HeroSection
                heading="Life is better when caregivers come to you"
                description="Our Talent Is Caring™. Having a caregiver come to your home should be reassuring, not overwhelming. We manage everything, every step of the way."
                ctaDesc="Get connected immediately to our Care Team."
            />
            <div className='bg-primary text-secondary-foreground pt-12 pb-36'>
                <BoxLayout>
                    <div className='lg:text-center mb-8 lg:mb-16'>
                        <h6 className='font-fancy'>Introducing</h6>
                        <h1 className='lg:text-center' >Your Care Team</h1>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-24'>
                        <div className='space-y-8'>
                            <p>
                                Mom and Dad deserve the best. To find a perfect match, each One-On-One caregiver is carefully screened, interviewed, and selected not only for experience, but their passion for making a difference.
                            </p>
                            <p>
                                From daily grocery shopping, meal preparation, and walks in the park to medication reminders and companionship, our caregivers make it possible for seniors to live in their own home. It’s about caring, not just healthcare™.
                            </p>
                        </div>
                        <div>
                            <p>If for some reason your caregiver is unavailable, we’ll quickly find another good match. If you need to change the schedule or suddenly require immediate care, our Care Team is available 24/7 to take your call.</p>
                        </div>
                    </div>
                </BoxLayout>
            </div>
            <BoxLayout className="pb-4 lg:pb-24">
                <div className='-mt-20'>
                    <ImageCards className="text-left" cardData={cardData} />
                </div>
            </BoxLayout>
            <div className='bg-secondary/10'>
                <BoxLayout className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-center space-y-4 py-8 lg:py-16" >
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <h2 className='text-primary'>Rigorous Hiring and Screening</h2>
                            <p>All of our caregivers and nurses are qualified, attentive, and willing to go above and beyond. Here’s how we train the team at One-On-One.</p>
                        </div>
                        <div className='space-y-4'>
                            <div>
                                <h3 className='text-primary'>Screened and Tested</h3>
                                <p className='text-base'>Our caregivers come in all shapes and sizes. Companions, home support workers and live-in caregivers have a variety of backgrounds, and our Certified Nursing Aides, Licensed Practical Nurses and Registered Nurses come with years of medical experience and training.</p>
                            </div>
                            <div>
                                <h3 className='text-primary'>Licensed and Insured</h3>
                                <p className='text-base'>Your loved one is in great hands. All caregivers are licensed and insured. We run criminal record checks, Tuberculosis tests and reference checks. With such in-depth screening and protection, you’ll have complete peace of mind.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={T4.src} alt=""  className='max-h-[1240px] object-cover'/>
                    </div>
                </BoxLayout>
            </div>
            <div>
                <BoxLayout className="flex flex-col lg:flex-row gap-4 py-6 lg:py-0 lg:gap-16 items-center" >
                    <div className='order-2 lg:order-1 '>
                        <img src={T5.src} alt="" className='max-h-[1260px]' />
                    </div>
                    <div className='space-y-6 order-1 lg:order-2'>
                        {[{
                            title: "Comprehensive Training",
                            desc: "To set them up for success, our training prepares caregivers to align with our core values and brand promises. They get access to scenarios for providing quality home health care."
                        },
                        {
                            title: "Practical Orientation",
                            desc: "We train caregivers in an educational environment where they can ask questions, gain practical knowledge for consistent care, and get familiar with our support teams and systems."
                        },
                        {
                            title: "Long-Term Retraining",
                            desc: "To stay up-to-date with our rapidly growing systems and procedures, caregivers who have worked with us long-term are invited back for retraining to refresh their skills, and realign with our initiatives and standards."
                        }].map((item) => (
                            <div>
                                <h3 className='text-secondary'>{item.title}</h3>
                                <p className="text-base">{item.desc}</p>
                            </div>
                        ))
                        }
                    </div>
                </BoxLayout>
            </div>
            <CaringJournal className="mt-10" />
        </div>
    )
}
