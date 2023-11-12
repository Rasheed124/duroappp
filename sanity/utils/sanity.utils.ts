import { groq } from "next-sanity";
import { client } from "../lib/client";



/*********************
   HOME
*********************/

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
             } | order(_updatedAt desc)`,
  );
}

// getAllPortfolioProjects
export async function getAllPortfolioProjects() {
  const graphicsQuery = groq`
            *[_type == 'graphicsVisualDesign' ][0...2]
{
            _id,
               
              ...,
                 
           
             } |  order(priority desc, _updatedAt desc)`;
  const productUiUXQuery = groq`
            *[_type == 'productUiUxs' ][0...2]
{
            _id,
               
              ...,
               
           
             } | order(priority desc, _updatedAt desc)`;

  const dataAnalystQuery = groq`
            *[_type == "dataAnalyst"][0...1]{
            ...,
         
         
             } | order(priority desc, _updatedAt desc)
        `;
  const marketWritingQuery = groq`
            *[_type == 'marketWriting' ][0...1]
{
            _id,
         
              ...,
              
           
             } | order(priority desc, _updatedAt desc)`;

  const graphics: Projects[] = await client.fetch(graphicsQuery);
  const product: Projects[] = await client.fetch(productUiUXQuery);
  const market: Projects[] = await client.fetch(marketWritingQuery);
  const dataAnalyst: Projects[] = await client.fetch(dataAnalystQuery);

  const combinedProjects = [...graphics, ...product, ...market, ...dataAnalyst];

  return combinedProjects;
}

// getAllPortfolioProjects
export async function getAllRequiredProjects() {
  const graphicsQuery = groq`
            *[_type == 'graphicsVisualDesign' ]
{
            _id,
               
              ...,
                  "projectImage" : projectImage.asset->url,
           
             } | order(_createdAt desc)`;
  const productUiUXQuery = groq`
            *[_type == 'productUiUxs' ]
{
            _id,
               
              ...,
                "projectImage" : projectImage.asset->url,
           
             } | order(_createdAt desc)`;

  const graphics: ProjectTds[] = await client.fetch(graphicsQuery);
  const product: ProjectTds[] = await client.fetch(productUiUXQuery);

  // const combinedProjects = [...dataAnalyst];
  const combinedProjects = [...graphics, ...product];

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

// BLOG PAGE
export async function getBlogList(): Promise<Post[]> {
  return client.fetch(
    groq`
        *[_type == "post"]{
            ...,
            author->,
             "comments": *[_type == "comment" && references(^._id) && approved == true],
            categories[]->
        } | order(_createdAt desc) `,
  );
}

export async function getSinglePost(slug: string): Promise<Post> {
  return client.fetch(
    groq`
        *[_type == "post"  && slug.current == $slug][0]{

                ...,
      tags,

      author->,
       "comments": *[_type == "comment" && references(^._id) && approved == true],
      categories[]->
         
        }  `,
    { slug },
  );
}

// ***** MARKETING ***** //
export async function getMarketWriting(): Promise<MarketWritings[]> {
  return client.fetch(
    groq`
        
        *[_type == "marketWriting"]{
            ...,
             writings[]->{
               ...,
             "image" : image.asset->url,
            }
         
             } | order(_createdAt desc)
        `,
  );
}

// ***** Data Analyst ***** //
export async function getDataAnalyst(): Promise<MarketWritings[]> {
  return client.fetch(
    groq`
        
        *[_type == "dataAnalyst"]{
            ...,
             writings[]->{
               ...,
             "image" : image.asset->url,
            }
         
             } | order(_createdAt desc)
        `,
  );
}

// ***** UI/UX & PRODUCT ***** //
export async function getUiUxProductDesigns(): Promise<ProjectTds[]> {
  return client.fetch(
    groq`*[_type == "productUiUxs"] {
            _id,
              ...,
                  "projectImage" : projectImage.asset->url,
           
             } | order(_createdAt desc)`,
  );
}

export async function getSingleUiUxProductDesigns(
  slug: string,
): Promise<ProjectTds> {
  return client.fetch(
    groq`*[_type == "productUiUxs" && slug.current == $slug][0]{
            _id,
              ...,
                      projectContent[]->{

                  title,

            "image" : image.asset->url,

                 
            }
           
           
           
             }  `,
    { slug },
  );
}

// ***** GRAPHICS & VISUAL ***** //
export async function getGraphicVisualDs(): Promise<ProjectTds[]> {
  return client.fetch(
    groq`*[_type == "graphicsVisualDesign"] {
            _id,
              ...,
                  "projectImage" : projectImage.asset->url,
           
             } | order(_createdAt desc)`,
  );
}

export async function getSingleGraphicVisualDs(
  slug: string,
): Promise<ProjectTds> {
  return client.fetch(
    groq`*[_type == "graphicsVisualDesign" && slug.current == $slug][0]{
            _id,
              ...,
                projectContent[]->{

                  title,

            "image" : image.asset->url,

                
            }
           
             }  `,
    { slug },
  );
}

// ***** ABOUT PAGE ***** //
export async function getAbout(): Promise<About[]> {
  return client.fetch(
    groq`
        
        *[_type == "about"]{
          ...,
           "image" : image.asset->url,
             companys[]->{
               ...,
             "image" : image.asset->url,
            }
             } | order(_createdAt desc)

        `,
  );
}

// ***** ABOUT PAGE ***** //
export async function getAwards(): Promise<Awards[]> {
  return client.fetch(
    groq`
        
        *[_type == "awardproject"]{
          ...,
           
             award[]->{
               ...,
             "image" : image.asset->url,
            },
             certfication[]->{
               ...,
             "image" : image.asset->url,
            },
             recognition[]->{
               ...,
             "image" : image.asset->url,
            },
             education[]->{
               ...,
             "image" : image.asset->url,
            },
             } | order(_createdAt desc)

        `,
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
