import { supabasePublic } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function Admin() {
  const db = supabasePublic();
  const { data } = await db.from("article_submissions").select("*").order("created_at",{ascending:false});
  const rows = data ?? [];
  return <main>
    <header className="nav"><a className="logo" href="/">MIND<span>MOVE</span></a><nav><a href="/">Website</a><a href="/submit">Publish</a></nav></header>
    <section className="submitPage">
      <p className="eyebrow">MIND MOVE ADMIN</p><h1>Review work.</h1>
      <p className="lead">V2 moderation dashboard. Protect this route with proper authentication before public production use.</p>
      <div style={{display:"grid",gap:16,marginTop:40}}>
        {rows.length===0 ? <p className="note">No submissions yet.</p> : rows.map((r:any)=><article key={r.id} className="card">
          <small>{r.type} • {r.status.toUpperCase()}</small><h3>{r.title}</h3><p>{r.content.slice(0,500)}</p><footer>BY {r.artist_name} · {r.email}</footer>
        </article>)}
      </div>
    </section>
  </main>
}
