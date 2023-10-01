import { getPlaiceholder } from "plaiceholder";
import type { imageResults,photo } from "@/models/Images";

async function base64generator (imgUrl:string){

    try{

    
    const res = await fetch(imgUrl)
    if(!res.ok) {
        console.log("wrong image url");
    }
const buffer = await res.arrayBuffer();
const {base64} = await getPlaiceholder(Buffer.from(buffer));
console.log(base64 , "base64 generated");
return base64
    }catch(error){
        console.log(error, "Error generating")
    }
}


export default async function addBlurredDataUrls(images:imageResults): Promise<photo[]>{
    const base64Promise = images.photos.map(Photo => base64generator(Photo.src.large))

    const base64Results = await Promise.all(base64Promise)
    const photosWithBlur: photo[] = images.photos.map((Photo ,i)=>{
        Photo.blurredDataUrl=base64Results[i]
        return Photo
    })
return photosWithBlur
}