
import { NextRequest, NextResponse } from "next/server";
import { getBlogList } from "../../../../sanity/utils/sanity.utils";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    // const { searchParams } = new URL(request.url);
    // const param = searchParams.get("q");

     const url = new URL(request.url);

     const param = url.searchParams.get("q");

    if (typeof param !== "string") {
      throw new Error("Invalid request");
    }

    const blogList = await getBlogList();

    // Filter the blogList based on the search parameter (case-insensitive)
    const filteredPosts = blogList.filter((post) => {
      const searchParamLower = param.toLowerCase();
      const postTitleLower = post.title.toLowerCase();
      const authorNameLower = post.author.name.toLowerCase();

      // Check if the search param exists in the lowercase post title or author name
      return (
        postTitleLower.includes(searchParamLower) ||
        authorNameLower.includes(searchParamLower)
      );
    });

    // Return the filtered posts as the API response
    return new Response(JSON.stringify(filteredPosts), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);

    // Return an error response if something goes wrong
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
