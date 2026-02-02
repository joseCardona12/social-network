export class PostService {
  public async getAll() {
    const endpoint: string = "http://localhost:4002/posts";
    try {
      const response = await fetch(endpoint, {
        method: "GET",
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  }

  public async updatePost(message: string, user_id = 1, postId: string) {
    if (!message) return;
    const endpoint: string = `http://localhost:4002/posts/${postId}`;
    try {
      const date: Date = new Date();
      const SQLDate = date.toISOString().split("T")[0];
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          user_id,
          date: SQLDate,
        }),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  }

  public async createPost(message: string, user_id = 1) {
    if (!message) return;
    const endpoint: string = "http://localhost:4002/posts";
    try {
      const date: Date = new Date();
      const SQLDate = date.toISOString().split("T")[0];
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          user_id,
          date: SQLDate,
        }),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  }
}

export const postServiceF = new PostService();
