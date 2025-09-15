import { createClient, SupabaseClient } from '@supabase/supabase-js';

    // TEMP DEBUG
    // eslint-disable-next-line no-console
    console.log('VITE_SUPABASE_URL present?', !!import.meta.env.VITE_SUPABASE_URL);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let supabase: SupabaseClient | null = null;

if (typeof supabaseUrl === 'string' && supabaseUrl && typeof supabaseAnonKey === 'string' && supabaseAnonKey) {
	supabase = createClient(supabaseUrl, supabaseAnonKey, {
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true,
	});
}

export function getSupabaseClient(): SupabaseClient | null {
	return supabase;
}


