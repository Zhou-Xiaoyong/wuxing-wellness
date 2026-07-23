import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    element: z.enum(['wood', 'fire', 'earth', 'metal', 'water']).optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Jin Yang'),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    element: z.enum(['wood', 'fire', 'earth', 'metal', 'water']),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    serves: z.string().optional(),
    recipeYield: z.string().optional(),
    recipeIngredient: z.array(z.string()).optional(),
    recipeInstructions: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Jin Yang'),
    heroImage: z.string().optional(),
    affiliate: z
      .array(
        z.object({
          name: z.string(),
          keyword: z.string(),
          asin: z.string().optional(),
          note: z.string().optional(),
          image: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const quizzes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/quizzes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    element: z.enum(['wood', 'fire', 'earth', 'metal', 'water']).optional(),
    author: z.string().default('Jin Yang'),
  }),
});

export const collections = { posts, recipes, quizzes };
