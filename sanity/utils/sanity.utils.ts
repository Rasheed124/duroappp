import { groq } from "next-sanity";
import { client } from "../lib/client";



/*********************
   CONTACT
*********************/
export async function getContact(): Promise<Contact[]> {
  return client.fetch(
    groq`
        
        *[_type == "contact"]{
          id,
               ...,
                "image" : image.asset->url,
     
         
             } | order(_createdAt desc)
        `,
  );
}
