import { groq } from "next-sanity";
import { client } from "../lib/client";



/*********************
   CONTACT
*********************/

// HOME BANNER
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


//  SKILLS LIST
export async function getSkills(): Promise<Skills[]> {
  return client.fetch(
    groq`*[_type == "skills"]{
            _id,
            heading,
            subHeading,
             skillsDetails[]->{
               ...,
             "image" : image.asset->url,
            }
             } | order(_createdAt desc)`,
  );
}


// getAllPortfolioProjects
export async function getAllPortfolioProjects() {
  const graphicsQuery = groq`
            *[_type == 'graphicsVisualDesign' ][0...2]
{
            _id,
               
              ...,
                 
           
             } | order(_createdAt asc)`;
  const productUiUXQuery = groq`
            *[_type == 'productUiUxs' ][0...2]
{
            _id,
               
              ...,
               
           
             } | order(_createdAt asc)`;

  const dataAnalystQuery = groq`
            *[_type == "dataAnalyst"][0...1]{
            ...,
         
         
             } | order(_createdAt asc)
        `;
  const marketWritingQuery = groq`
            *[_type == 'marketWriting' ][0...1]
{
            _id,
         
              ...,
              
           
             } | order(_createdAt asc)`;

  const graphics: Projects[] = await client.fetch(graphicsQuery);
  const product: Projects[] = await client.fetch(productUiUXQuery);
  const market: Projects[] = await client.fetch(marketWritingQuery);
  const dataAnalyst: Projects[] = await client.fetch(dataAnalystQuery);


  const combinedProjects = [...graphics, ...product, ...market, ...dataAnalyst];

  return combinedProjects;
}

//  TESTIMONIALS LIST
export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    groq`*[_type == "testimonial"]{
            _id,
            title,
            description,
            author

             } | order(_createdAt desc)`,
  );
}

// *************  BLOG POST LIST
export async function getPostList(): Promise<Post[]> {
  return client.fetch(
    groq`
        *[_type == "post"][0...3]{
            ...,
            author->,
      
             "comments": *[_type == "comment" && references(^._id) && approved == true],
            categories[]->
        } | order(_createdAt desc) `,
  );
}


// ************* PRODUCT MARKETING

export async function getProductMarketing(): Promise<ProductMarketing[]> {
  return client.fetch(
    groq`
        
        *[_type == "productMarketing"]{
          id,
               ...,
                "image" : image.asset->url,
     
         
             } | order(_createdAt desc)
        `,
  );
}
