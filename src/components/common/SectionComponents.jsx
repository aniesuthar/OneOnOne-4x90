import React from 'react'
import Img1 from "@/assets/images/service-hero.png";
import { CallUsButton } from './CallUsButton';
import BoxLayout from './Box';
import CheckPoint from './CheckPoint';


export function HeadingSection({ heading }) {
    return (
        <h1 className='text-primary text-4xl lg:text-6xl lg:mr-60'>
            {heading}
        </h1>
    )
}


export default function HeroSection({ backgroundImage, heading, description, cta, ctaDesc, checkpoints, className }) {
    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage ? backgroundImage : Img1.src})` }}
            className={`bg-cover bg-center h-fit min-h-[60vh] lg:min-h-[86vh] overlay content-end ${className}`}
        >
            <BoxLayout className="flex items-center" >
                <div className="w-full lg:w-1/2 px-2 py-6 pt-32 lg:pt-28 lg:py-20 lg:px-0 space-y-6">
                    <h1 className="text-primary text-4xl lg:text-6xl lg:mr-60">{heading}</h1>
                    <p>
                        {description.split('<br>').map((line, index) => (
                            <span key={index} className="block my-4">
                                {line}
                            </span>
                        ))}
                    </p>

                    {checkpoints?.length &&
                        <div>
                            {checkpoints?.map((item) => (
                                <CheckPoint text={item} textSize="text-base" />
                            ))}
                        </div>
                    }

                    <CallUsButton />
                    <p className='text-base'>{ctaDesc}</p>
                </div>
            </BoxLayout>
        </div>
    );
}
