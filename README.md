# MIND MOVE Article — V4

Vercel-ready standalone Next.js project.

## Deploy
1. Upload **this folder itself** to Vercel. Do not upload the parent Store+Article ZIP.
2. In Vercel Project Settings → Environment Variables, add:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://oobtnngmorzxenpttfyz.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase publishable/anon key
3. Redeploy.

## Supabase
Run `supabase/schema.sql` in Supabase SQL Editor. The schema creates `admin_users` before the RLS policies that reference it.

After creating an admin user in Supabase Authentication, add its UUID to `public.admin_users` using the SQL comment at the bottom of the schema.

## Important
The Store and Article are two separate Vercel projects but share the same Supabase project/database.
