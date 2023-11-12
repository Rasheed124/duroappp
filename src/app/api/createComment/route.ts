import { NextRequest } from "next/server";
import { createClient } from "next-sanity";

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

export async function POST(request: NextRequest) {
  const { slug, data} = await request.json();

  const {_id , name, email, comment} = data

  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });


        const doc = await client.fetch(
          `*[_type == 'post' && slug.current == $slug][0]{
         ...,
         comment
      }`,
          { slug },
        );

        if (doc) {
      
            // Increment the like count
            const updatedCommentDoc = await client
              .patch(doc._id)
              .inc({ comment: 1 })
              .setIfMissing({ comment: 1 }) // Add this line to create the field if missing
              .commit();

        
            return new Response(
              JSON.stringify({ comment: updatedCommentDoc.comment }),
              {
                status: 200,
              },
            );
      
        } else {
          console.log("Commment Submitted Successfully");

          return new Response(
            JSON.stringify({ message: "Commment Submitted" }),
          );
        }

  



  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({ message: "Couldn't submit comment" }),
      { status: 500 },
    );
  }
}
