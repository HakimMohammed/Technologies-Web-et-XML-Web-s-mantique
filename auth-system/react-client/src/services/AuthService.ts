import { User } from "@/types/auth";
import { API_URL } from "@/config";

export const AuthService = {
  signIn: async (email: string, password: string): Promise<User> => {
    const response = await fetch(`${API_URL}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Invalid credentials");
    }
  },

  signUp: async (
    name: string,
    email: string,
    password: string
  ): Promise<User> => {
    const response = await fetch(`${API_URL}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Invalid credentials");
    }
  },
};
