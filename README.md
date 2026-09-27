# MIND MOVE Article

Separate publishing site connected to MIND MOVE Store.

- Store: https://mind-move-store.vercel.app
- Article: https://mind-move-article.vercel.app
- Shared Supabase: https://oobtnngmorzxenpttfyz.supabase.co

## Deploy
1. Run `MIND_MOVE_STORE/supabase/schema.sql` once in Supabase SQL Editor.
2. Deploy this folder to Vercel as its own project.
3. Add the variables from `.env.example` to Vercel.
4. Test `/submit`.

## Security
The publishable key is for browser use. Keep RLS enabled. Do not expose a service-role key.
The `/admin` page is not production-secure yet; add authentication before using it publicly.
