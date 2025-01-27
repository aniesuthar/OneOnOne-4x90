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


export default function HeroSection({ backgroundImage, heading, description, noCta, ctaDesc, checkpoints, className, hasVideo }) {
  return (
    <div
      className={`relative bg-cover bg-center content-center h-fit min-h-[60vh] lg:min-h-[85vh] overlay ${className}`}
      style={{
        backgroundImage: hasVideo
          ? "none" // Disable background image if video is present
          : `url(${backgroundImage ? backgroundImage : Img1.src})`,
      }}
    >
      {/* Video Background */}
      {hasVideo && (
        <video
          preload="auto"
          loop
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://onetoonehealth.wpenginepowered.com/wp-content/uploads/2022/04/OneToOneHealth_BrandFilm_website-teaser.webm"
            type="video/webm"
          />
          <source
            src="https://onetoonehealth.wpenginepowered.com/wp-content/uploads/2022/04/OneToOneHealth_BrandFilm_website-teaser.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* Content on Top */}
      <BoxLayout className="relative z-10 flex items-center h-full">
        <div className="w-full xl:w-3/5 px-2 py-6 pt-32 lg:pt-48 lg:py-10 lg:px-0 space-y-8">
          <h1 className="text-primary text-4xl lg:text-6xl lg:mr-60">{heading}</h1>
          <p>
            {description.split("<br>").map((line, index) => (
              <span key={index} className="block my-4">
                {line}
              </span>
            ))}
          </p>

          {checkpoints?.length > 0 && (
            <div>
              {checkpoints?.map((item, index) => (
                <CheckPoint key={index} text={item} textSize="text-base" />
              ))}
            </div>
          )}
          {!noCta &&
            <>
              <CallUsButton />
              <p className="text-base">{ctaDesc}</p>
            </>
          }
        </div>
      </BoxLayout>
    </div>
  );
}
