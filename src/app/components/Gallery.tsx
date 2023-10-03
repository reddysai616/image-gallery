import React from 'react'
import fetchImages from '@/lib/fetchImages'
import type { imageResults } from '@/models/Images'
import ImgContainer from './ImgContainer'
import addBlurredDataUrls from '@/lib/base64generator'
import myPrePagesNextPages from '@/lib/myPrevPagesNextPages'
import Footer from './Footer'

type Props={
  topic?:string|undefined
  page?:string|undefined

}

export default async function Gallery({topic='curated' , page}:Props) {


let url
if(topic==='curated'&& page) {
  url = `https://api.pexels.com/v1/curated?page=${page}`

} else if (topic==='curated'){
  url = `https://api.pexels.com/v1/curated`
}else if(!page){
  url =  `https://api.pexels.com/v1/search?query=${topic}`

}else {
  url = `https://api.pexels.com/v1/search?query=${topic}page=${page}`
}
// const url = !topic ? 'https://api.pexels.com/v1/curated' : `https://api.pexels.com/v1/search?query=${topic}`
const images:imageResults|undefined = await fetchImages(url)
if(!images || images?.per_page === 0) return  <h2 className='font-bold mx-0 p-0'>No images Found</h2>
const photosWithBlur = await addBlurredDataUrls(images)
const {pp , np } = myPrePagesNextPages(images)
const footerprops = {pp , np ,topic, page}
  return (
  <>
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
      
        <ul>
            {photosWithBlur.map(photo => (
              <ImgContainer key={photo.id} Photo={photo}/>

            ))}


            
        </ul>
    </section>
    <Footer {...footerprops}/>
  </>
    

  )
}
 