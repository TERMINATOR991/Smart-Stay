
  # Dorm Management System

  This is a code bundle for Dorm Management System. The original project is available at https://www.figma.com/design/cxFqH5CKXkg9nVObsfyBoN/Dorm-Management-System.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
 
  ## Supabase setup
 
  1. Create a project at https://supabase.com and get your Project URL and anon key.
  2. Create a `.env` file in the project root with:
  
  ```
  VITE_SUPABASE_URL=your_supabase_url
  VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
  ```
  
  3. In Supabase SQL editor, create a `listings` table (or adapt fields):
  
  ```sql
  create table if not exists public.listings (
    id uuid default gen_random_uuid() primary key,
    name text,
    location text,
    price numeric,
    deposit numeric,
    type text,
    sharing text,
    rating numeric,
    reviews int,
    image_url text,
    amenities text[],
    highlighted boolean default false
  );
  -- Enable RLS as needed and add anon read policy for demo
  alter table public.listings enable row level security;
  create policy "Public read listings" on public.listings for select using (true);
  ```
  
  4. Restart the dev server after setting environment variables.
  