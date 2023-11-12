import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
// Contact
import contact from './schemas/contact/contact'
// Home
import skill from './schemas/home/skill/skill'
import skills from './schemas/home/skill/skills'
// About
import about from './schemas/about/about'
import company from './schemas/about/company'
import marketing from './schemas/projects/marketing/marketing'
import marketingPost from './schemas/projects/marketing/marketingPost'
import graphicsVisualDesign from './schemas/projects/design-graphics/graphics-visual-design'
import graphicsVisualDesignContent from './schemas/projects/design-graphics/graphics-visual-design-content'
import dataAnalyst from './schemas/projects/data-analyst/data-analyst'
import dataAnalystPost from './schemas/projects/data-analyst/data-analystPost'
import uiUxProductDesign from './schemas/projects/design-product/ui-ux-product-design'
import uiUxProductDesignContent from './schemas/projects/design-product/ui-ux-product-design-content'
import award from "./schemas/about/award/pro-award";
import awardProject from './schemas/about/awardProject'
import proEducation from './schemas/about/education/pro-education'
import proRecognition from './schemas/about/recognition/pro-recognition'
import productMarketing from './schemas/product/productMarketing'
import proCertification from './schemas/about/certification/pro-certification'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    contact,
    skill,
    skills,
    about,
    company,

    marketing,
    marketingPost,

    graphicsVisualDesign,
    graphicsVisualDesignContent,

    dataAnalyst,
    dataAnalystPost,

    uiUxProductDesign,
    uiUxProductDesignContent,

    award,
    awardProject,
    proEducation,
    proRecognition,
    productMarketing,
    proCertification,
  ],
};
