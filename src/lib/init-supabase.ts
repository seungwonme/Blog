"use server";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/database.types";

export async function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    const supabase = createClient<Database>(supabaseUrl, supabaseKey);
    if (!supabase) {
      return null;
    }
    return supabase;
  }
  console.error("Supabase URL or Key not found");
  return null;
}
