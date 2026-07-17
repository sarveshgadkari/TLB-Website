-- Run this once in the Supabase SQL editor (Project -> SQL Editor -> New query)
-- This table is shared across multiple websites; website_name / website_url
-- identify which site a lead came from.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  website_name text not null,
  website_url text not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  company text,
  inquiry_type text,
  message text not null,
  source text,
  page_path text,
  created_at timestamptz not null default now()
);

create index if not exists leads_website_url_idx on public.leads (website_url);

alter table public.leads enable row level security;

-- No public policies are created: only the service_role key (used server-side
-- in src/app/api/leads/route.js) can read/write this table.
