import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    emoji: z.string(),
    tagline: z.string(),
    category: z.enum([
      "Agent IA / LLM",
      "Data Engineering",
      "Machine Learning",
      "Produit",
      "Autre",
    ]),
    context: z.enum([
      "Meet My Mama",
      "Personnel",
      "Académique",
    ]),
    status: z
      .enum(["Production", "En cours", "Académique", "Produit"])
      .optional(),
    period: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    tech: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
