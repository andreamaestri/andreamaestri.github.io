import { defineCollection, z } from "astro:content";
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

// Define the collections
const assets = defineCollection({
  loader: cldAssetsLoader({
    limit: 1200,
    folder: '2024', // Replace with your folder name
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  // Include the schema and other configurations as needed
});

// Export all collections in the `collections` object
export const collections = {
  assets,
  blog,
  work,
  projects,
};
