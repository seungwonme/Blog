import { Database } from '@/libs/database.types';

export type Post = Database['public']['Tables']['Posts']['Row'];
export type PostMetaData = Pick<
  Post,
  'id' | 'title' | 'category_id' | 'created_at'
>;
