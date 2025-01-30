'use server';

import { getSupabase } from '@/libs/init-supabase';
import { Post, PostMetaData } from '@/types/post';

export async function getPostMetaDataList(): Promise<PostMetaData[] | null> {
  try {
    const supabase = await getSupabase();
    const { data: postMetaDataList, error } = await supabase
      .from('Posts')
      .select('id, title, category_id, created_at');
    if (error) {
      console.error(error);
      throw error;
    }
    return postMetaDataList;
  } catch (error) {
    console.error('Failed to get post meta datas:', error);
    return null;
  }
}

export async function getPost(id: string): Promise<Post | null> {
  try {
    const supabase = await getSupabase();
    const { data: postContent, error } = await supabase
      .from('Posts')
      .select('*')
      .eq('id', Number(id))
      .single();
    if (error) {
      console.error(error);
      throw error;
    }
    return postContent;
  } catch (error) {
    console.error('Failed to get post contents:', error);
    return null;
  }
}

// TEST: 모든 포스트를 가져오는 함수
export async function getPosts(): Promise<Post[] | null> {
  const supabase = await getSupabase();
  if (!supabase) {
    console.error('Supabase not initialized');
    return null;
  }

  const { data: Posts, error } = await supabase.from('Posts').select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return Posts;
}
