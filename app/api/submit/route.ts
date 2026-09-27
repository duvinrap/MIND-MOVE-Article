import { supabaseServer } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const artist_name = String(form.get("artist") || "").trim();
    const email = String(form.get("email") || "").trim();
    const type = String(form.get("type") || "");
    const title = String(form.get("title") || "").trim();
    const content = String(form.get("content") || "").trim();
    const original = form.get("original") === "on";

    if (!artist_name || !email || !title || !content || !original || !["Poem", "Story", "Article"].includes(type)) {
      return NextResponse.redirect(new URL("/submit?error=" + encodeURIComponent("Please complete all fields and confirm your work is original."), req.url), 303);
    }

    const db = await supabaseServer();
    const { error } = await db.from("article_submissions").insert({
      artist_name, email, type, title, content, status: "pending"
    });

    if (error) {
      return NextResponse.redirect(new URL("/submit?error=" + encodeURIComponent(error.message), req.url), 303);
    }

    return NextResponse.redirect(new URL("/submit?success=1", req.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/submit?error=" + encodeURIComponent("Something went wrong while saving your submission. Please try again."), req.url), 303);
  }
}
