export interface User {
    // UUID
    id: string;
    name: string;
    email: string;
}

export interface AuthContextType {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (name: string, email: string, password: string) => Promise<void>;
    signOut: () => void;
}