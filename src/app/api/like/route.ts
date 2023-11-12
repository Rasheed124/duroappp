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
    { status: 200, statusText: "Set cookie successfully" }
  );

  

    const doc = await client.fetch(
      `*[_type == 'post' && slug.current == $slug][0]{
         ...,
         likes
      }`,
      { slug },
    );

    if (doc) {
      if (action === "like") {
        // Increment the like count
        const updatedDoc = await client
          .patch(doc._id)
          .inc({ likes: 1 })
          .setIfMissing({ likes: 1 }) // Add this line to create the field if missing
          .commit();

        // Store the liked status in a cookie
        const likedCookie = (request.headers.get("cookie") || "") as string;
        const likedPosts = likedCookie.split(";").map((c) => c.trim());
        likedPosts.push(`likedPosts=${slug}`);

        // Use response.headers.append to set the cookie in the response headers
        response.cookies.set("Set-Cookie", likedPosts.join(";"));

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
