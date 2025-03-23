import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/icon.jpg";
import { LogOut, House } from "lucide-react";

export default function Dashboard() {
  const { user, signOut } = useAuth();

  console.log("user", user);

  return (
    // <div className="relative">
    //   {/* header */}

    //   <h1>Welcome  {user?.name}</h1>
    //   <Button onClick={signOut}>Sign Out</Button>
    // </div>
    <>
      {" "}
      <div className="absolute top-0 left-0 right-0 h-24 bg-white shadow-md flex items-center">
        <img src={logo} alt="" className="w-16 m-4" />
        <h1 className="text-2xl">ENSET Mohammedia | Ecole Normale Supérieure de l'Enseignement Technique</h1>
      </div>
      <div className="absolute top-24 left-0 right-0 p-4 flex flex-col gap-4 w-36 bg-gray-900 shadow-md h-full">
      <Button >
          <House size={24} />
          Dashboard
        </Button>
        <Button onClick={signOut}>
          <LogOut size={24} />
          Sign Out
        </Button>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-7xl">
          <span className="italic">Welcome Back</span><br />
         Mr. {user?.name}
        </p>
      </div>
    </>
  );
}
