# MIND MOVE Article — Full V3

## Includes
- Public Article home with live approved work from Supabase
- Publish workflow: pending → admin review → approved/rejected
- Individual public work pages
- Secure Supabase Auth admin login
- `admin_users` allowlist for moderation
- Shared Supabase schema with MIND MOVE Store reviews
- Store ↔ Article navigation

## Environment
Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel.

## First admin
1. Create an admin user in Supabase Authentication.
2. Copy that user's UUID.
3. Run `insert into public.admin_users(user_id) values ('YOUR-USER-UUID');` in Supabase SQL Editor.

## Database
Run `supabase/shared_schema.sql` once. It is designed for the same Supabase project used by MIND MOVE Store.

## Store URL
The Article links currently point to `https://mind-move-store.vercel.app`. Replace this with the real Store domain if your Vercel URL differs.
