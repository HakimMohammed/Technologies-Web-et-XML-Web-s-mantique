import SignIn from "@/features/auth/SignIn";
import SignUp from "@/features/auth/SignUp";
import Dashboard from "@/features/dashboard/Dashboard";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { ProtectedRoute } from "./ProtectedRoute";

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex min-h-[100svh] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  ),
});

const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signin",
  component: () => <SignIn />,
});

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: () => <SignUp />,
});

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  signInRoute,
  signUpRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
