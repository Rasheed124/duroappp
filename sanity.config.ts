/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { myTheme } from './theme'
import Logo from '@/components/admin/StudioLogo'
import Navbar from '@/components/admin/StudioNavbar'


export default defineConfig({
  basePath: '/admin',
  name: "Durodola_Admin_Dashboard",
  title: "Durodola Admin Dashboard",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,

   theme: myTheme,

     studio: {
    components: {
      logo: Logo,
      navbar: Navbar,
    },
  },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
