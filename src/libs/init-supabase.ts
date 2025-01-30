'use server';

import { createClient } from '@supabase/supabase-js';
import { Database } from '@/libs/database.types';

const getEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null;

export async function getSupabase(): Promise<
  ReturnType<typeof createClient<Database>>
> {
  try {
    if (supabaseInstance) {
      return supabaseInstance;
    }
    const supabaseUrl = getEnvVar('NEXT_PUBLIC_SUPABASE_URL');
    const supabaseKey = getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY');

    supabaseInstance = createClient(supabaseUrl, supabaseKey);

    return supabaseInstance;
  } catch (error) {
    console.error('Supabase initialization error:', error);
    throw new Error('Failed to initialize Supabase client');
  }
}
