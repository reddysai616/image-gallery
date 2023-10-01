import {z} from 'zod'


const basicImageSchema = z.object({
    page:z.number(),
    per_page:z.number(),
    total_results:z.number(),
    prev_page:z.string().optional(),
    next_page:z.string().optional(),

})

const imageSchema = z.object({
    id:z.number(),
    width:z.number(),
    height:z.number(),
    url:z.string(),
    src:z.object({
        large:z.string(),
    }),
    alt:z.string(),
    blurredDataUrl:z.string().optional(),
})

export const ImageSchemaWithPhotos = basicImageSchema.extend({
    photos:z.array(imageSchema),
})

export type photo = z.infer<typeof imageSchema>
export type imageResults = z.infer<typeof ImageSchemaWithPhotos>