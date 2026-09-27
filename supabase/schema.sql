-- MIND MOVE Article V2
create table if not exists public.submissions (
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

alter table public.submissions enable row level security;

-- Public visitors can create a pending submission.
create policy "public can submit"
on public.submissions for insert
to anon, authenticated
with check (status = 'pending');

-- Public visitors can only see approved work.
create policy "public can read approved"
on public.submissions for select
to anon, authenticated
using (status = 'approved');
