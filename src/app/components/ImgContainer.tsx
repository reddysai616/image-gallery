import React from 'react'
import type { photo } from '@/models/Images';
import Image from "next/image"
import Link from 'next/link';

type props={
  Photo:photo
}

export default function ImgContainer({Photo}:props) {

  const widthHeightRatio = Photo.height/ Photo.width
  const galleryHeight = Math.ceil(250 * widthHeightRatio)
  const photoSpans = Math.ceil(galleryHeight / 10)+1
  return (
    <>
    <div  className=' w-[250px] justify-self-center grid   ' style={{
      gridRow:`span ${photoSpans} grid`
    }}>
      <Link href={Photo.url} target='_blank' className='grid place-content-center'>
      <div className='rounded-xl overflow-hidden group'>

      <Image
      src={Photo.src.large}
      alt={Photo.alt}
      width={Photo.width}
      height={Photo.height}
      // fill={true}
      placeholder='blur'
      blurDataURL={Photo.blurredDataUrl}
      // sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
      sizes='250px'
      className=" group-hover:opacity-75"

      />
      </div>
      </Link>

    </div>
    
    </>
  )
}
