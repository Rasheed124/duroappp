// import { client } from "@/lib/sanity.client";
import { createClient } from "next-sanity";

import { NextRequest, NextResponse } from "next/server";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
const token = process.env.SANITY_API_TOKEN!;

// Connecting to Sanity Client
const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
  token,
});

export async function POST(request: NextRequest, response: NextResponse) {
  try {
   

    const  {slug}  = JSON.parse(await request.text());


    const doc = await client.fetch(
      `*[_type == 'post' && slug.current == $slug][0]{
    ...,  
    views
    
  }`,
      { slug },
    );

    if (doc && "views" in doc) {
      const updatedViewDoc = await client
        .patch(doc._id)
        .inc({ views: 1 })
        .setIfMissing({ views: 1 }) // Add this line to create the field if missing
        .commit();

     

      return new Response(
        JSON.stringify({ views: updatedViewDoc.views }),
        {
          status: 200,
        },
      );
    } else {
      return new Response(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }
  } catch (err) {
    console.error(err);

    // Return an error response if something goes wrong
    return new Response(
      JSON.stringify({ error: "Error updating view count" }),
      {
        status: 500,
      },
    );
  }
}
