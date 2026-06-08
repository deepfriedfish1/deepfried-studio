import { defineCollection} from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const services = defineCollection({
    loader: glob({ base : './src/content/services', pattern: '**/*.md'}),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string()
    })
});

const portfolio = defineCollection({
  loader: glob({ base : './src/content/portfolio', pattern: '**/*.md'}),
  schema: z.object({
    title: z.string(),
    category: z.enum(['web', 'shop', 'app']),
    description: z.string(),
    image: z.string(),
    link: z.string()
  }),
});

const team = defineCollection({
  loader: glob({ base : './src/content/team', pattern: '**/*.md'}),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    social: z.array(z.object({
      icon: z.string(),
      url: z.string(),
    })),
  }),
});

export const collections = {
  services,
  portfolio,
  team,
};