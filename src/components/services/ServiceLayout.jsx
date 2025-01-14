import React from 'react';
import Img1 from "@/assets/images/service-hero.png";
import sectionImg2 from "@/assets/images/serviceImg2.png";
import CallUsButton from '../common/CallUsButton';
import CaringJournal from './CaringJournal';

export default function ServiceLayout() {
    const serviceDatas = {
        serviceName: "ABC",
        data: {
            section1: {
                heading: "Comprehensive Home Care Service",
                desc: `Finding home care and nursing care services that meets your loved one’s needs can be challenging. At One to One health, it’s our mission to provide the most comprehensive home health services for seniors in your area. We design a care plan that provides the personalized support and assistance they'll need to remain independent and continue living a fun, fulfilling life as they age. </br>
                    Ready to see what Happier Aging® is all about? </br>
                    
                    Contact us to set up a care consult today.`,
                img: Img1.src
            },
            section2: {
                heading: "From personal care to nursing care, find perfect caregivers with Nurse Next Door",
                desc: `Whether your loved one requires light help around the home or more specialized care for chronic conditions—our amazing senior care team is here to support you every step of the way. We’ll guide you through the entire home health care process and work closely with you and other family members to help you find a person who deeply understands your loved one’s needs, matches their personality, and brings joy to their day.`,
            },
            section3: {
                heading: "In home care services built around you",
                desc: `Our comprehensive in home care team will ask you about what you love to do most during the day so we can factor your hobbies of choice into your care plan. Do you like attending a weekly pottery class or going for a walk with your friends every morning? Your caregiver can accompany you and arrange for transportation to and from your favorite activities. Do you have family coming for a holiday dinner and need assistance with preparing the ham and stuffing? Your caregiver will be ready to assist you with your groceries, selecting the perfect bouquet of flowers, menu organizing, and setting the table prior to your guests’ arrival.</br>
                        Our professional caregivers and nurses provide different types of support based on clients’ individual needs. Our home care services can include:
                    `,
                img: sectionImg2.src,
                cards: [
                    {
                        title: "Personal Care Services:",
                        desc: "Grooming, bathing assistance, dressing, and other personal care and self care activities."
                    },
                    {
                        title: "Nursing Care Services:",
                        desc: "Monitoring illness, medication reminders, around-the-clock care, physical therapy, and more specialized services."
                    },
                    {
                        title: "Other Home Care Services:",
                        desc: "Meal preparation, light housekeeping, grocery shopping, transportation, companion care, and family caregivers respite services."
                    },
                ]
            },
        }
    };

    const serviceData = serviceDatas.data;

    return (
        <section>
            <div
                style={{ backgroundImage: `url(${serviceData.section1.img})` }}
                className='bg-cover bg-center min-h-fit h-[80vh] overlay content-center flex items-center'
            >
                <div className='w-full lg:w-1/2 p-8 lg:p-20 space-y-6 ml-4 lg:ml-24'>
                    <h1 className='text-primary text-2xl lg:text-4xl'>{serviceData.section1.heading}</h1>
                    <p>
                        {serviceData.section1.desc.split("</br>").map((line, index) => (
                            <span key={index} className="block my-4">
                                {line}
                            </span>
                        ))}
                    </p>
                    <CallUsButton />
                </div>
            </div>

            <div className='bg-secondary text-center p-8 lg:p-20 text-white'>
                <div className='max-w-[980px] m-auto space-y-4'>
                    <h2 className='text-xl lg:text-3xl'>{serviceData.section2.heading}</h2>
                    <p>{serviceData.section2.desc}</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row my-8'>
                <div className='w-full lg:w-3/5 p-8 lg:p-16'>
                    <h2 className='text-xl lg:text-3xl'>{serviceData.section3.heading}</h2>
                    <p>
                        {serviceData.section3.desc.split("</br>").map((line, index) => (
                            <span key={index} className="block my-4">
                                {line}
                            </span>
                        ))}
                    </p>
                    <div className='flex flex-wrap gap-6'>
                        {serviceData.section3.cards.map((card, idx) => (
                            <div key={idx} className='p-6 bg-primary text-primary-foreground w-full md:w-1/2'>
                                <h3 className='text-lg font-bold'>{card.title}</h3>
                                <p className='text-sm'>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className='w-full lg:w-2/5 bg-cover bg-center h-60 lg:h-auto'
                    style={{ backgroundImage: `url(${serviceData.section3.img})` }}
                ></div>
            </div>

            <div className='bg-secondary/10'>
                <div className='mx-4 lg:mx-60 flex flex-col lg:flex-row gap-8 lg:gap-16 h-fit p-8 lg:p-16 text-center'>
                    <div className='space-y-4'>
                        <h2 className='text-lg lg:text-2xl'>The benefits of in home care services</h2>
                        <p>One to One Health simplifies home care administration by pairing you with a dedicated care manager. They coordinate care, communication, and planning between your family, care team, doctors, and healthcare providers, easing the stress of senior care and supporting short- and long-term goals.</p>
                    </div>
                    <span className='block w-full lg:w-2 bg-primary mx-auto'></span>
                    <div className='space-y-4'>
                        <h2 className='text-lg lg:text-2xl'>Home health care services you can rely on</h2>
                        <p>We understand the importance of consistent, reliable caregivers for quality home nursing care. At One to One, we ensure continuity of care with a familiar, dependable team, providing daily support so you can live your life as usual. Our comprehensive home care programs are designed to bring you peace of mind and happiness every day.</p>
                    </div>
                </div>
            </div>
            <CaringJournal />
        </section>
    );
}
