import Layout from "@/components/site/Navbars/NavbarLayout";
import {
  getAllPortfolioProjects,
  getContact,
  getPostList,
  getProductMarketing,
  getSkills,
  getTestimonials,
} from "../../sanity/utils/sanity.utils";
import Banner from "@/components/site/Home/HomeBanner/Banner";
import Skills from "@/components/site/Home/Skills/Skills";
import Projects from "@/components/site/Home/Projects/projects";
import Testimonial from "@/components/site/Home/Testimonial/Testimonial";
import ProductBanner from "@/components/site/Home/ProductBanner/ProductBanner";
import PostList from "@/components/site/Home/PostList";
import ContactInfo from "@/components/site/Contact/ContactInfo";



export const revalidate = 60; // revalidate this page every 60 seconds



export default async function Home() {
  const contactData = await getContact();

  const skills = await getSkills();

  const project = await getAllPortfolioProjects();

  const testimonials = await getTestimonials();

  const products = await getProductMarketing();

    const postData = await getPostList();

  return (
    <>
      <div className="bg-deep-black text-light-white  xl:px-0">
        <Layout route="/">
          {/* HOME BANNER */}
          <Banner contacts={contactData} />

          {/* SKILLS */}
          <Skills skills={skills} />

          {/* PROJECTS */}
          <Projects projects={project} />

          {/* Testimonials */}
          <Testimonial testimonials={testimonials} />

          {/* Product Banner */}
          <ProductBanner products={products} />

          {/* Recent Post */}
          <PostList postList={postData} />

          {/* Contact | Footer */}
          <ContactInfo contacts={contactData} />
        </Layout>
      </div>
    </>
  );
}
