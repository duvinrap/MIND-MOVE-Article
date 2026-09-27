import { NextResponse } from "next/server";
import { supabasePublic } from "@/lib/supabase";

export async function POST(req: Request) {
  const form = await req.formData();
  const artist_name = String(form.get("artist") || "").trim();
  const email = String(form.get("email") || "").trim();
  const type = String(form.get("type") || "");
  const title = String(form.get("title") || "").trim();
  const content = String(form.get("content") || "").trim();

  if (!artist_name || !email || !title || !content) {
    return new Response("Missing required fields", { status: 400 });
  }

  const db = supabasePublic();
  const { error } = await db.from("article_submissions").insert({
    artist_name, email, type, title, content, status: "pending"
  });

  if (error) {
    return new Response("Could not save submission.", { status: 500 });
  }

  return new Response(
    `<html><body style="font-family:Arial;padding:40px"><h1>Submission received ✓</h1><p>Thanks, ${artist_name}. Your work is now waiting for MIND MOVE review.</p><a href="/">Back to MIND MOVE</a></body></html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}
