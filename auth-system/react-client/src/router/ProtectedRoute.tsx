import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "@tanstack/react-router";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/signin" replace/>;
    }

    return <>{children}</>;
}