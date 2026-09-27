-- MIND MOVE shared Supabase schema — Article + Store
create extension if not exists pgcrypto;

-- Admin table must exist before article RLS policies reference it.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
grant select on public.admin_users to authenticated;
drop policy if exists "admins can read own admin row" on public.admin_users;
create policy "admins can read own admin row"
  on public.admin_users for select to authenticated
  using (user_id = auth.uid());

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  product text not null default 'MIND MOVE',
  rating integer not null check (rating between 1 and 5),
  review_text text not null,
  created_at timestamptz not null default now()
);
alter table public.reviews enable row level security;
grant usage on schema public to anon, authenticated;
grant select, insert on public.reviews to anon, authenticated;
drop policy if exists "public can read reviews" on public.reviews;
create policy "public can read reviews" on public.reviews
  for select to anon, authenticated using (true);
drop policy if exists "public can post reviews" on public.reviews;
create policy "public can post reviews" on public.reviews
  for insert to anon, authenticated
  with check (
    char_length(trim(name)) between 1 and 40
    and rating between 1 and 5
    and char_length(trim(review_text)) between 1 and 500
  );

create table if not exists public.article_submissions (
  id uuid primary key default gen_random_uuid(),
  artist_name text not null,
  email text not null,
  type text not null check (type in ('Poem','Story','Article')),
  title text not null,
  content text not null,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);
alter table public.article_submissions enable row level security;
grant insert, select on public.article_submissions to anon, authenticated;
grant update on public.article_submissions to authenticated;
drop policy if exists "public can submit article" on public.article_submissions;
create policy "public can submit article" on public.article_submissions
  for insert to anon, authenticated
  with check (status = 'pending');
drop policy if exists "public can read approved articles" on public.article_submissions;
create policy "public can read approved articles" on public.article_submissions
  for select to anon, authenticated
  using (
    status = 'approved'
    or exists (select 1 from public.admin_users a where a.user_id = auth.uid())
  );
drop policy if exists "admins can update articles" on public.article_submissions;
create policy "admins can update articles" on public.article_submissions
  for update to authenticated
  using (exists (select 1 from public.admin_users a where a.user_id = auth.uid()))
  with check (status in ('pending','approved','rejected'));

-- FIRST ADMIN SETUP:
-- 1) Create the admin account in Supabase Authentication.
-- 2) Copy that user's UUID.
-- 3) Run: insert into public.admin_users(user_id) values ('YOUR-USER-UUID');
