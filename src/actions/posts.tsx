"use server";

import { getSupabase } from "@/lib/init-supabase";
import { Database } from "@/lib/database.types";

type Post = Database["public"]["Tables"]["Posts"]["Row"];

export async function getPosts(): Promise<Post[] | null> {
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
