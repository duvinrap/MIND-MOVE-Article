import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase";
export const dynamic="force-dynamic";
export default async function Work({params}:{params:Promise<{id:string}>}){
 const {id}=await params; const db=await supabaseServer();
 const {data}=await db.from("article_submissions").select("id,type,title,content,artist_name,created_at").eq("id",id).eq("status","approved").maybeSingle();
 if(!data) notFound();
 return <main><header className="nav"><Link className="logo" href="/">MIND<span>MOVE</span></Link><nav><Link href="/">Home</Link><Link href="/submit">Publish</Link><a href="https://mind-move-store.vercel.app" target="_blank" rel="noopener noreferrer">Store ↗</a></nav></header><article className="workPage"><p className="eyebrow">{data.type.toUpperCase()}</p><h1>{data.title}</h1><p className="byline">BY {data.artist_name}</p><div className="workContent">{data.content.split(/\n+/).map((p:string,i:number)=><p key={i}>{p}</p>)}</div></article></main>
}
