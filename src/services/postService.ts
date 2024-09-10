import { api } from '@/api';
import {
  type Paginate,
  type Post,
  type PostResponse,
  PostSchema,
} from '@/types';

export class PostService {
  public static async getPosts({
    page,
    perPage,
  }: Paginate): Promise<PostResponse> {
    try {
      const response = await api.get<PostResponse>(
        `/posts?_page=${page}&_per_page=${perPage}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error in getPosts method', error);
      throw error;
    }
  }

  public static async getPostById(postId: string): Promise<Post> {
    try {
      const response = await api.get<Post>(`/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error('Error in getPostById method', error);
      throw error;
    }
  }

  public static async createPost(post: Post): Promise<Post> {
    try {
      const validPost = PostSchema.parse(post);
      const response = await api.post<Post>('/posts', validPost);
      return response.data;
    } catch (error) {
      console.error('Error in createPost method', error);
      throw error;
    }
  }

  public static async updatePost(post: Post): Promise<Post> {
    try {
      const validPost = PostSchema.parse(post);

      console.log('validPost', validPost);
      const response = await api.put<Post>(
        `/posts/${validPost?.id}`,
        validPost,
      );
      return response.data;
    } catch (error) {
      console.error('Error in updatePost method', error);
      throw error;
    }
  }

  public static async deletePost(postId: string): Promise<void> {
    try {
      await api.delete(`/posts/${postId}`);
    } catch (error) {
      console.error('Error in deletePost method', error);
      throw error;
    }
  }
}
