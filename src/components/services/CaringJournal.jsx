import React from 'react'
import Jrnl1Img from "@/assets/images/jrnl1.jpg"
import Jrnl2Img from "@/assets/images/jrnl2.png"

const caringJournalData = [
    {
        img: Jrnl1Img.src,
        title: "Connect with One to One",
        desc: "Connect with your local One to One Health Care Team to start the process of setting up in-home care services.",
    },
    {
        img: Jrnl2Img.src,
        title: "Schedule a consultation",
        desc: "We’ll work with you to schedule a free consultation with one of our care experts, who will assess your needs and develop a customized care plan.",
    },
    {
        img: Jrnl1Img.src,
        title: "Connect with One to One Health",
        desc: "Once your care plan has been developed, our Care Team will work with you to schedule your first visit. We’ll be there to provide support and assistance every step of the way.",
    },
]
export default function CaringJournal() {
    return (
        <div className='text-center p-20 space-y-16'>
            <div className='mx-96'>
                <h2 className='text-primary'>The Caring Journal</h2>
                <p className='text-base mx-24'>
                    The Caring Journal is full of informative resources, client stories and offers a viewfinder into the wonderful world of senior home care. Read the latest blogs here.
                </p>
            </div>

            <div className='grid grid-cols-3 gap-6 max-w-[1120px] m-auto'>
                {caringJournalData.map((item) => (
                    <div className='bg-primary/10 p-4 text-center rounded-3xl'>
                        <div
                            className='w-full min-h-96 !bg-cover !bg-center rounded-xl'
                            style={{ background: `url(${item.img})` }}
                        ></div>
                        <div className='my-6'>
                        <h4 className='text-primary' >{item.title}</h4>
                        <p className='text-sm'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
