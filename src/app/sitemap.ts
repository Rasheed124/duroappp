export default async function sitemap() {
  const baseUrl = "https://durodolaportfolio.pages.dev";

//   const posts = await getAllPosts();
//   const postUrls = posts.map((post) => ({
//     url: `${baseUrl}/post/${post.slug}`,
//     lastModified: post.updatedAt,
//   }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/data-analyst`, lastModified: new Date() },
    { url: `${baseUrl}/digital-marketing`, lastModified: new Date() },
    { url: `${baseUrl}/graphics-visual-design`, lastModified: new Date() },
    { url: `${baseUrl}/ui-ux-product-design`, lastModified: new Date() },
   


    // ...postUrls,
  ];
}