import { cn } from '@/lib/utils'
import React from 'react'
import Img1 from "@/assets/images/service-hero.png";

export default function ImageCards({ cardData, className }) {
    return (
        <div className={cn('flex flex-wrap w-full', !cardData.img && "text-center", className)}>
            {!!cardData.length &&
                cardData.map((card, idx) => (
                    <div className={cn('basis-1 text-primary-foreground', cardData.length == 5 && `lg:basis-1/5`, cardData.length == 4 && `lg:basis-1/4`, cardData.length == 3 &&  `lg:basis-1/3`, cardData.length == 2 &&  `lg:basis-1/2`)} key={idx}>
                        <div key={idx} className={cn('p-6 bg-primary h-full', !!card.img?.length && "rounded-2xl")} style={{ marginRight: idx === cardData.length - 1 ? 0 : '1.5rem' }}>
                            <img src={!card.img.length ? Img1.src : card.img} alt={card.img} className='mb-6 rounded-lg max-h-60 object-cover w-full' />
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
