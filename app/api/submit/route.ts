import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const artist = String(form.get("artist") || "");
  const email = String(form.get("email") || "");
  const title = String(form.get("title") || "");
  if (!artist || !email || !title) return NextResponse.json({ok:false,error:"Missing required fields"},{status:400});
  return new Response(`<html><body style="font-family:Arial;padding:40px"><h1>Submission received</h1><p>Thanks, ${artist}. “${title}” is ready for the next moderation/database step.</p><a href="/">Back to MIND MOVE</a></body></html>`,{headers:{"content-type":"text/html; charset=utf-8"}});
}
