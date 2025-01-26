import React from 'react';
import Jrnl1Img from "@/assets/images/jrnl1.jpg";
import Jrnl2Img from "@/assets/images/jrnl2.png";
import { cn } from '@/lib/utils';

const caringJournalData = [
    {
        img: Jrnl1Img.src,
        title: "Connect with ONE-ON-ONE",
        desc: "Connect with your local ONE-ON-ONE Health Care Team to start the process of setting up in-home care services.",
    },
    {
        img: Jrnl2Img.src,
        title: "Schedule a consultation",
        desc: "We’ll work with you to schedule a free consultation with one of our care experts, who will assess your needs and develop a customized care plan.",
    },
    {
        img: Jrnl1Img.src,
        title: "Connect with ONE-ON-ONE Health",
        desc: "Once your care plan has been developed, our Care Team will work with you to schedule your first visit. We’ll be there to provide support and assistance every step of the way.",
    },
];

export default function CaringJournal({ className }) {
    return (
        <div className={cn("text-center px-6 py-12 space-y-12", className)}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-primary text-2xl md:text-3xl">The Caring Journal</h2>
                <p className="text-base md:text-lg mt-4">
                    The Caring Journal is full of informative resources, client stories and offers a viewfinder into the wonderful world of senior home care. Read the latest blogs here.
                </p>
            </div>

            <div className='overflow-x-scroll [&::-webkit-scrollbar]:hidden'>
                <div className="flex gap-6 max-w-6xl mx-auto">
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> */}
                    {caringJournalData.map((item, index) => (
                        <div key={index} className="min-w-[320px] basis-1/3 bg-primary/10 p-4 text-center rounded-3xl">
                            <div
                                className="w-full h-48 md:h-60 bg-cover bg-center rounded-xl"
                                style={{ backgroundImage: `url(${item.img})` }}
                            ></div>
                            <div className="mt-6">
                                <h4 className="text-primary text-lg md:text-xl">{item.title}</h4>
                                <p className="text-xs md:text-base mt-2">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
