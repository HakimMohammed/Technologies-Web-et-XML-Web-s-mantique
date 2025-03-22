import { AuthService } from "@/services/AuthService";
import { AuthContextType, User } from "@/types/auth";
import { createContext, useState } from "react";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const signIn = async (email: string, password: string) => {
    try {
      const response = await AuthService.signIn(email, password);
      setUser(response);
      sessionStorage.setItem("user", JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      const response = await AuthService.signUp(name, email, password);
      setUser(response);
      sessionStorage.setItem("user", JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
