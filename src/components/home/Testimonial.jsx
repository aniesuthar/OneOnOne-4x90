import React from 'react'
import Img3 from '@/assets/images/4.jpeg'
import Link from 'next/link';
import BoxLayout from '../common/Box';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


export default function TestimonialSection() {
    return (
        <div className='mb-20 bg-primary/5'>
            <BoxLayout className='flex flex-col lg:flex-row'>
                {/* Left Image Section */}

                <div className='lg:w-1/2 w-full space-y-12 lg:space-y-20 p-8 lg:p-24 lg:pl-0 order-2 lg:order-1'>
                    {[{
                        quote: "Overall, what she gets is care, honest-to-goodness care. I get the peace of mind of knowing that my mother is with a company that sincerely cares about her. They give you basic respect, dignity and the tender loving care that all of our parents want and that we want for our parents.",
                        author: "Andrea S",
                        designation: "Client's Daughter"
                    },
                    ].map((item) => (
                        <div className='text-primary'>
                            <FormatQuoteIcon className='size-10'/>
                            <p className='font-fancy'>{item.quote}</p>
                            <div className='w-fit mt-4 ml-auto text-center'>
                                <h4 className='mt-8'>{item.author}</h4>
                                <h6 className='font-normal'>{item.designation}</h6>
                            </div>

                        </div>
                    ))
                    }
                </div>

                {/* Right Content Section */}
                <div className='lg:w-1/2 w-full h-60 lg:h-auto bg-cover bg-no-repeat order-1 lg:order-2' style={{ backgroundImage: `url(${Img3.src})` }}>
                </div>
            </BoxLayout>
        </div>
    );
}
