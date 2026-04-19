"use server";
import { z } from "zod";
import { supabase } from "@/app/shared/supabase";
import { revalidatePath } from "next/cache";

const blogSchema = z.object({
  name: z.string().min(1, "Blog Name is required"),
  description: z.string().min(1, "Blog Description is required"),
});

export interface FormState {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    description?: string[];
  };
}

export async function createBlogAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = blogSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  // Save the data to Postgresql using Supabase's JS client
  const { error } = await supabase.from("blogs").insert([
    {
      Name: result.data.name,
      Description: result.data.description,
    },
  ]);

  if (error) {
    console.error("Database connection/insertion error:", error);
    return {
      success: false,
      message: "Failed to create blog. Check Database Setup.",
    };
  }

  // revalidatePath("/blog/my-blogs");
  return { success: true, message: "Blog successfully created in Database!" };
}

export async function getBlogs() {
  try {
    const { data, error } = await supabase.from("blogs").select("*");

    if (error) {
      console.error("Database fetch error:", error);
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (err: unknown) {
    console.error("Unexpected fetch error:", err);
    return {
      data: null,
      error: err instanceof Error ? err.message : "Internal Server Error",
    };
  }
}

export async function deleteBlogAction(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) return;
  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error) console.error("Delete Error", error);
  revalidatePath("/blog/my-blogs");
}

export async function updateBlogAction(
  id: string,
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = blogSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) return { errors: result.error.flatten().fieldErrors };

  const { error } = await supabase
    .from("blogs")
    .update({ Name: result.data.name, Description: result.data.description })
    .eq("id", id);

  if (error) {
    console.error("Database update error:", error);
    return { success: false, message: "Failed to update blog." };
  }

  revalidatePath("/blog/my-blogs");
  return { success: true, message: "Blog successfully updated!" };
}

export async function getBlogById(id: string) {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();
    if (error) return { data: null, error: error.message };
    return { data, error: null };
  } catch (err: unknown) {
    return { data: null, error: "Internal Server Error" };
  }
}
