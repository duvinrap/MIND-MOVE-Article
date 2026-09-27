import Link from "next/link";

type Props = { searchParams: Promise<{ success?: string; error?: string }> };

export default async function Submit({ searchParams }: Props){
  const params = await searchParams;
  const success = params.success === "1";
  const error = params.error ? decodeURIComponent(params.error) : "";

  return <main>
    <header className="nav">
      <Link className="logo" href="/">MIND<span>MOVE</span></Link>
      <nav><Link href="/">Home</Link><Link href="/submit">Publish</Link><a href="https://mind-move-store.vercel.app" target="_blank" rel="noopener noreferrer">Store ↗</a></nav>
    </header>
    <section className="submitPage">
      <p className="eyebrow">MIND MOVE ARTICLE</p>
      <h1>{success ? "Submission received." : "Publish your work."}</h1>
      {success ? (
        <div className="successBox">
          <div className="successIcon">✓</div>
          <h2>Your work is now under review.</h2>
          <p>Thanks for sharing your voice with MIND MOVE. Your submission was saved successfully and will appear publicly only after review.</p>
          <div className="buttons"><Link className="btn gradientBtn" href="/">Back to Article</Link><Link className="btn outlineBtn" href="/submit">Submit another work</Link></div>
        </div>
      ) : (
        <>
          <p className="lead">Send your original poem, story or article to MIND MOVE. Every submission starts as pending and must be reviewed before it appears publicly.</p>
          {error && <div className="errorBox">{error}</div>}
          <form action="/api/submit" method="post">
            <label>Artist name<input name="artist" required maxLength={50}/></label>
            <label>Email<input name="email" type="email" required maxLength={120}/></label>
            <label>Work type<select name="type" defaultValue="Poem"><option>Poem</option><option>Story</option><option>Article</option></select></label>
            <label>Title<input name="title" required maxLength={120}/></label>
            <label>Your work<textarea name="content" required maxLength={20000}/></label>
            <label className="check"><input name="original" type="checkbox" required/> I confirm this is my original work or I have permission to publish it.</label>
            <button className="btn gradientBtn" type="submit">Send for review →</button>
          </form>
        </>
      )}
    </section>
  </main>
}
