-- Recreate table used by Contact/Admin components
-- Table name must stay exactly: elevatex_messages

create extension if not exists pgcrypto;

create table if not exists public.elevatex_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  website_type text not null,
  message text,
  created_at timestamptz not null default now()
);

alter table public.elevatex_messages enable row level security;

-- Contact form insert (frontend anon key)
drop policy if exists "Allow public insert elevatex messages" on public.elevatex_messages;
create policy "Allow public insert elevatex messages"
on public.elevatex_messages
for insert
to anon
with check (true);

-- Admin panel currently runs in frontend with anon key,
-- so it needs read/delete permissions from anon.
-- For stronger security, move admin actions to server-side APIs.
drop policy if exists "Allow public read elevatex messages" on public.elevatex_messages;
create policy "Allow public read elevatex messages"
on public.elevatex_messages
for select
to anon
using (true);

drop policy if exists "Allow public delete elevatex messages" on public.elevatex_messages;
create policy "Allow public delete elevatex messages"
on public.elevatex_messages
for delete
to anon
using (true);
