import { cn } from '@/lib/utils'
import React from 'react'
import Img1 from "@/assets/images/service-hero.png";

export default function ImageCards({ cardData, className }) {
    return (
        <div className={cn('flex flex-wrap flex-col lg:flex-row gap-4 w-full', !cardData.img && "text-center", className)}>
            {!!cardData.length &&
                cardData.map((card, idx) => (
                    <div className={cn('text-primary flex-1',)} key={idx}>
                        <div key={idx} className={cn('p-3 bg-primary-foreground border-4 border-primary/40 h-full', !!card.img?.length && "rounded-2xl")} >
                            <img src={!card.img.length ? Img1.src : card.img} alt={card.img} className='mb-6 rounded-lg h-36 object-cover w-full' />
                            <h3 className='text-lg font-bold'>{card.title}</h3>

                            <p className='text-sm'>{card.desc.split("</br>").map((line, index) => (
                                <span key={index} className="block my-4">
                                    {line}
                                </span>
                            ))}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
