export class AuthService {
  public async login(email: string, password: string) {
    if (!email || !password) return;
    const endpoint: string = "http://localhost:4001/auth/login";
    try {
      const result = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!result.ok) {
        const text = await result.text();
        throw new Error(text);
      }
      return await result.json();
    } catch (error) {
      throw Error(`ERROR: ${error}`);
    }
  }
}

export const authServiceF = new AuthService();
