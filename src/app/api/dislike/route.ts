
// Import the necessary modules and functions
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

  
   // Parse the request body to get the slug and action (like or dislike)
   const { slug, action } = JSON.parse(await request.text());

       const response = NextResponse.json(
         {},
         { status: 200, statusText: "Set cookie successfully" },
       );

      

   const doc = await client.fetch(
     `*[_type == 'post' && slug.current == $slug][0]{
         ...,
         likes
      }`,
     { slug },
   );

   if (doc) {
     if (action === "dislike") {
       // Decrement the like count by 1
       const updatedDoc = await client
         .patch(doc._id)
         .dec({ likes: 1 })
         .commit();

       // Remove the disliked post from the cookie
       const likedCookie = (request.headers.get("cookie") || "")
         .split(";")
         .map((c) => c.trim());
       const index = likedCookie.indexOf(`likedPosts=${slug}`);
       if (index !== -1) {
         likedCookie.splice(index, 1);
         // Use response.headers.set to update the cookie in the response headers
         response.headers.set("Set-Cookie", likedCookie.join(";"));
       }

       return new Response(JSON.stringify({ likes: updatedDoc.likes }), {
         status: 200,
       });
     }
   } else {
     return new Response(JSON.stringify({ message: "Post not found" }), {
       status: 404,
     });
   }
 } catch (err) {
   console.error(err);
   return new Response(
     JSON.stringify({ error: "Error updating likes count" }),
     {
       status: 500,
     },
   );
 }
}
