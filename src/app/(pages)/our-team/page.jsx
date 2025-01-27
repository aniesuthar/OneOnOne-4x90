import React from 'react'
import BoxLayout from '@/components/common/Box'
import HeroSection from '@/components/common/SectionComponents'
import bgImageHero from '@/assets/images/img4.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import TeamCrImg1 from '@/assets/images/teamcr1.jpg'
import TeamCrImg2 from '@/assets/images/teamcr2.jpg'
import TeamCrImg3 from '@/assets/images/teamcr3.jpg'

export default function page() {
    const slidesToScroll = 1;
    return (
        <>
            <HeroSection
                heading="One Provider + One Patient = Better Health"
                description="We’re just people taking care of people."
                noCta
                backgroundImage={bgImageHero.src}
            />
            <Carousel className="w-full bg-primary my-2" opts={{ slidesToScroll: slidesToScroll }}>
                <CarouselContent>
                    {[{
                        title: "Our Story",
                        description: `Our founder, Dr. Keith Helton, previously spent 20 years practicing internal medicine and pediatrics. He even led Physician Services for one of the region’s largest health systems. One patient, responsible for their organization’s benefits plan saw costs spiraling and employee satisfaction dwindling. He asked Dr. Helton, “Can you help us?`,
                        img: TeamCrImg1
                    },
                    {
                        title: "Our Story",
                        description: `The traditional healthcare system can work against the best interests of the patient and the employers footing the bill. “There has to be a better way,” Dr. Helton thought. And upon answering that patient’s call for help, he quickly realized that his new model of direct care works. Costs dropped dramatically, and employees raved about their easy access to compassionate, fair-cost care.`,
                        img: TeamCrImg2
                    },
                    {
                        title: "Our Story",
                        description: `Word spread, and many listened and jumped on board with Dr. Helton’s innovative solution. Over the next seven years, the company’s reach would expand throughout the region and country, positively impacting over 160,000 lives. And, his mission continues… for partners and patients alike, one-to-one.`,
                        img: TeamCrImg3
                    },
                    ].map((item, i) => (
                        <CarouselItem key={i} style={{ flexBasis: (1 / slidesToScroll) * 100 + "%" }}>
                            <div className='size-full flex flex-col lg:flex-row gap-8'>
                                <div className='basis-1 lg:basis-2/3 space-y-52 p-24'>
                                    <div className='text-[#A2E7F9]'>
                                        <p className='text-sm'>0{i+1}</p>
                                        <h1 className='font-normal'>{item.title}</h1>
                                    </div>
                                    <p className='text-primary-foreground text-base'>{item.description}</p>
                                </div>
                                <div style={{backgroundImage: `url(${item.img.src})`}} className='basis-1 lg:basis-1/3 bg-center bg-cover'></div>
                            </div>
                        </CarouselItem>
                    ))
                    }
                </CarouselContent>
                {/* <CarouselPrevious />
                        <CarouselNext /> */}
            </Carousel>

            <BoxLayout>

            </BoxLayout>
        </>
    )
}
