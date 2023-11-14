type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  posts: Post[];
  tags: string[];
  views: number;
  likes: number;
  reads: number;
  comments: Comment[];
  comment: number;
}

interface Comment extends Base {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  mainImage: Image;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h6" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  test: string;
}

interface Category extends Base {
  description: string;
  title: string;
  slug: Slug;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}
interface Title {
  _type: "string";
  current: string;
}

// Skill
interface Skill extends Base {
  description: string;
  title: string;
  image: Image;
}
interface Skills extends Base {
  name: string;
  heading: string;
  subHeading: string;
  skillsDetails: Skill[];
}

// Projects
interface Projects extends Base {
  heading: string;
  title: string;
  slug: Slug;
  projectImage: image;
}

// PROJECT FOR Product Visual DESIGN
interface ProjectTds extends Base {
  heading: string;
  title: string;
  description: string;
  shortdescription: string;
  slug: Slug;
  url: string;
  skillsTitle: string;
  keyResult: string;
  testimonials: string;
  shareProject: string;
  projectlink: string;
  projectImage: image;
  projectContent: ProjectContent[];
}

// Project Content
interface ProjectContent extends Base {
  title: string;
  image: Image;
  url: string;
  video: string;
}

// Testimonial
interface Testimonial extends Base {
  title: string;
  description: string;
  author: string;
}

// About
interface Company extends Base {
  title: string;
  image: string;
  url: string;
}

interface About extends Base {
  title: string;
  storyText: string;
  image: string;
  heading: string;
  companys: Company[];
}


/****
 AWARD PROJECT
***/

interface Awards extends Base {
  title: string;
  subtitle: string;
  image: string;
  award: AwardTemplate[];
  certfication: AwardTemplate[];
  recognition: AwardTemplate[];
  education: AwardTemplate[];
}

// Award Project
interface AwardTemplate extends Base {
  title: string;
  description: string;
  image: string;
  slug: string;
}

// Contact
interface Contact extends Base {
  title: string;
  logo: string;
  text: string;
  mail: string;
  infoText: string;
  form: string;
  socialHandle: string;
  marquee: string;
  heading: string;
  resume: string;

  homeBannerAddress: string;
  homeBannerHandleText: string;
  image: Image;
  slug: Slug;
  homeBannerSkills: string;
}

// Marketing
interface MarketWritings extends Base {
  title: string;
  subTitle: string;
  writings: WritingPost[];
}

interface WritingPost extends Base {
  title: string;
  image: string;
  url: string;
  description: string;
}


// Marketing Template 
interface ProductMarketing extends Base {
  title: string;
  text: string;
  content: string;
  strategies: string;
  slugtitle: string;
  image: string;
  slug: Slug;
  video: Slug;
}