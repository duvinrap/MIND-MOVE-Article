import Link from "next/link";

export default function Submit(){
 return <main><header className="nav"><Link className="logo" href="/">MIND<span>MOVE</span></Link><nav><Link href="/">Home</Link><Link href="/submit">Publish</Link></nav></header>
 <section className="submitPage"><p className="eyebrow">MIND MOVE ARTICLE</p><h1>Publish your work.</h1><p className="lead">This is the public submission foundation. In V1, submissions are prepared for connection to a moderation/database system.</p>
 <form action="/api/submit" method="post"><label>Artist name<input name="artist" required maxLength={50}/></label><label>Email<input name="email" type="email" required/></label><label>Work type<select name="type"><option>Poem</option><option>Story</option><option>Article</option></select></label><label>Title<input name="title" required maxLength={120}/></label><label>Your work<textarea name="content" required maxLength={10000}/></label><label className="check"><input type="checkbox" required/> I confirm this is my original work or I have permission to publish it.</label><button className="btn dark" type="submit">Send for review →</button></form>
 <p className="note">V1 intentionally uses a review-first workflow. No submission should become public automatically until moderation/database storage is connected.</p></section></main>
}
