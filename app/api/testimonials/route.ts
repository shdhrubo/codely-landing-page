import { NextResponse } from "next/server";
import { supabase } from "@/app/shared/supabase";
import { z } from "zod";

const testimonialSchema = z.object({
  rating: z.coerce
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

export async function GET() {
  try {
    const { data, error } = await supabase.from("testimonials").select("*");
    if (error)
      return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = testimonialSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { errors: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from("testimonials")
      .insert([{ Rating: result.data.rating, Message: result.data.message }]);

    if (error) {
      return NextResponse.json(
        { error: "Failed to create testimonial." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Testimonial successfully added!" },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
