import type { imageResults } from "@/models/Images";

function getPageNumber (url:string){
    const {searchParams} = new URL(url);
    return searchParams.get('page')

}

export default function myPrePagesNextPages(images:imageResults){

    let np = images?.next_page ? getPageNumber(images.next_page):null
    const pp = images?.prev_page ? getPageNumber(images.prev_page):null
    const totalPages = images?.total_results % images?.per_page  ? Math.ceil(images?.total_results / images?.per_page) :
    (images?.total_results/images?.per_page)+1

    if(pp && (parseInt(pp)+5) < totalPages){
        np = (parseInt(pp)+5).toString()
    }
    if(np && (parseInt(np)) <= totalPages){
        np= null
    }
    return {np , pp}


}