import { User } from "@/types/auth";
import { API_URL, SALT } from "@/config";
import { v4 } from 'uuid';
import bcrypt from "bcryptjs";


export const AuthService = {
  signIn: async (email: string, password: string): Promise<User> => {
    const response = await fetch(`${API_URL}?email=${email}`);
    const user = await response.json();
    if (!user) {
      throw new Error("User not found");
    }
    const firstUser = user[0];

    const hashedPassword = bcrypt.hashSync(password, SALT)
    
    const isValid = hashedPassword === firstUser.password;
    console.log("isValid", isValid);
    if (!isValid) {
      throw new Error("Invalid credentials");
    }
    return firstUser;
  },

  signUp: async (
    name: string,
    email: string,
    password: string
  ): Promise<User> => {
    const id = v4();
    const hashedPassword = bcrypt.hashSync(password, SALT)
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, email, password: hashedPassword }),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Invalid credentials");
    }
  },
};
