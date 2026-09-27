import Link from "next/link";

const featured = [
  ["POEM","A Mind Full of Rain","Duvin","Between silence and sound, I found a little piece of me."],
  ["STORY","The Night I Found My Voice","MIND MOVE","Some stories begin with a dream. Some begin with a single sentence."],
  ["ARTICLE","Create Before They Notice","MIND MOVE","Your first audience does not need to be millions. Start with one person."],
];

export default function Home(){
 return <main>
  <header className="nav"><Link className="logo" href="/">MIND<span>MOVE</span></Link>
   <nav><Link href="#discover">Discover</Link><Link href="#artists">Artists</Link><Link href="/submit">Publish</Link><a href="https://mind-move-store.vercel.app" target="_blank" rel="noopener noreferrer">Store</a></nav>
  </header>
  <section className="hero">
   <div><p className="eyebrow">MIND MOVE • ARTICLE</p><h1>Words that<br/><em>move</em> the mind.</h1>
   <p className="lead">A home for stories, poems, articles and creative voices. Discover creators. Publish your work. Build your name.</p>
   <div className="buttons"><Link className="btn light" href="#discover">Explore</Link><Link className="btn dark" href="/submit">Publish your work →</Link></div></div>
   <div className="mark"><b>MM</b><span>CREATE<br/>SHARE<br/>MOVE</span></div>
  </section>
  <section id="discover" className="section"><div className="sectionTop"><div><p className="eyebrow">DISCOVER</p><h2>Featured work</h2></div><span className="pill">NEW • V1</span></div>
   <div className="cards">{featured.map((x,i)=><article className="card" key={i}><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[3]}</p><footer>BY {x[2]} <span>↗</span></footer></article>)}</div>
  </section>
  <section id="artists" className="section dark"><p className="eyebrow">CREATOR COMMUNITY</p><h2>Artists belong here.</h2><p className="lead">MIND MOVE is being built step by step — first publishing, then profiles, follows, likes, comments, collections and creator tools.</p><div className="road"><div><b>01</b><strong>Publish</strong><span>Share your voice</span></div><div><b>02</b><strong>Profile</strong><span>Build your identity</span></div><div><b>03</b><strong>Grow</strong><span>Reach your audience</span></div></div></section>
  <section id="store" className="store"><div><p className="eyebrow">MIND MOVE STORE</p><h2>Creative work can become value.</h2><p>Connect your existing MIND MOVE webstore here when you are ready.</p></div><a className="btn dark" href="https://mind-move-store.vercel.app" target="_blank" rel="noopener noreferrer">Open Store →</a></section>
  <footer className="siteFooter"><div><b>MIND MOVE</b><span>Article • Artists • Ideas</span></div><span>© 2026 MIND MOVE. All Rights Reserved.</span></footer>
 </main>
}
