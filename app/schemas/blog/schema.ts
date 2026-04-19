import { z } from "zod";

export const blogSchema = z.object({
  name: z.string().min(1, "Blog Name is required"),
  description: z.string().min(1, "Blog Description is required"),
});

export type BlogFormDataType = z.infer<typeof blogSchema>;
