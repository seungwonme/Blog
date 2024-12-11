"use server";

import { getSupabase } from "@/lib/init-supabase";

export async function getPosts() {
  const supabase = await getSupabase();
  if (!supabase) {
    console.error("Supabase not initialized");
    return null;
  }

  let { data: Posts, error } = await supabase.from("Posts").select("*");
  if (error) {
    console.error(error);
    return null;
  }
  return Posts;
}
