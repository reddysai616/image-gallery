import type { imageResults } from "@/models/Images";
import  {ImageSchemaWithPhotos} from "@/models/Images";
// import env from "./env";


export default async function fetchImages(url:string):Promise<imageResults|undefined>{
    try {
        const res = await fetch(url , {
            headers:{
                Authorization:'keE257he0h2duw6MTdvkQk1i9MXo90b58vVSdH5oT1b3ievaiIlVBnsd'
                
            }
            
        });
        // console.log( env.PEXELS_API_KEY)

        if (!res.ok) {
            console.log("fetch error: ")
            
        }
        const ImageResults:imageResults = await res.json()
        const parseData = ImageSchemaWithPhotos.parse(ImageResults)
        if (parseData.total_results === 0) return undefined 
        return parseData
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.stack)
        }
        
    }

}