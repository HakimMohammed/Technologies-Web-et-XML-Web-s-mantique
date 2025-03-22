import SignIn from "./features/auth/SignIn";
import SignUp from "./features/auth/SignUp";

function App() {
  return (
    <div className="flex min-h-[100svh] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
