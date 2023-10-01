import React from 'react'
import fetchImages from '@/lib/fetchImages'
import type { imageResults } from '@/models/Images'
import ImgContainer from './ImgContainer'
import addBlurredDataUrls from '@/lib/base64generator'

type Props={
  topic?:string|undefined
}

export default async function Gallery({topic}:Props) {



const url = !topic ? 'https://api.pexels.com/v1/curated' : `https://api.pexels.com/v1/search?query=${topic}`
const images:imageResults|undefined = await fetchImages(url)
if(!images) return  <h2 className='font-bold mx-0 p-0'>No images Found</h2>
const photosWithBlur = await addBlurredDataUrls(images)
  return (
  
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
      
        <ul>
            {photosWithBlur.map(photo => (
              <ImgContainer key={photo.id} Photo={photo}/>

            ))}


            
        </ul>
    </section>
    

  )
}
 