import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function Home(){
 const db=await supabaseServer();
 const {data:works}=await db.from("article_submissions").select("id,type,title,content,artist_name,created_at").eq("status","approved").order("created_at",{ascending:false}).limit(6);
 return <main>
  <header className="nav"><Link className="logo" href="/">MIND<span>MOVE</span></Link><nav><Link href="#discover">Discover</Link><Link href="#artists">Artists</Link><Link href="/submit">Publish</Link><a href="https://mind-move-store.vercel.app" target="_blank" rel="noopener noreferrer">Store ↗</a></nav></header>
  <section className="hero"><div><p className="eyebrow">MIND MOVE • ARTICLE</p><h1>Words that<br/><em>move</em> the mind.</h1><p className="lead">A home for stories, poems, articles and creative voices. Discover creators. Publish your work. Build your name.</p><div className="buttons"><Link className="btn light" href="#discover">Explore</Link><Link className="btn dark" href="/submit">Publish your work →</Link></div></div><div className="mark"><b>MM</b><span>CREATE<br/>SHARE<br/>MOVE</span></div></section>
  <section id="discover" className="section"><div className="sectionTop"><div><p className="eyebrow">DISCOVER</p><h2>Latest approved work</h2></div><span className="pill">LIVE • V3</span></div><div className="cards">{(works??[]).map((x:any)=><Link className="card" href={`/work/${x.id}`} key={x.id}><small>{x.type}</small><h3>{x.title}</h3><p>{x.content.slice(0,180)}{x.content.length>180?"…":""}</p><footer>BY {x.artist_name} <span>↗</span></footer></Link>)}{(!works||works.length===0)&&<article className="card"><small>COMING SOON</small><h3>The first approved work will appear here.</h3><p>Submit your poem, story or article and it can be reviewed by MIND MOVE.</p><footer>BUILD YOUR VOICE</footer></article>}</div></section>
  <section id="artists" className="section dark"><p className="eyebrow">CREATOR COMMUNITY</p><h2>Artists belong here.</h2><p className="lead">Publish first. Then build profiles, follows, likes, comments, collections and creator tools as the MIND MOVE community grows.</p><div className="road"><div><b>01</b><strong>Publish</strong><span>Share your voice</span></div><div><b>02</b><strong>Profile</strong><span>Build your identity</span></div><div><b>03</b><strong>Grow</strong><span>Reach your audience</span></div></div></section>
  <section className="store"><div><p className="eyebrow">MIND MOVE STORE</p><h2>One ecosystem. Two websites.</h2><p>Discover products and apps on the Store, then return to Article for stories, poems and creators.</p></div><a className="btn dark" href="https://mind-move-store.vercel.app" target="_blank" rel="noopener noreferrer">Open Store →</a></section>
  <footer className="siteFooter"><div><b>MIND MOVE</b><span>Article • Artists • Ideas</span></div><span>© 2026 MIND MOVE. All Rights Reserved.</span></footer>
 </main>
}
