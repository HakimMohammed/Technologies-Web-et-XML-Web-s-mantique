import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ReactNode } from "react";
import icon from "@/assets/icon.jpg";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={cn("w-full max-w-sm")} >
      <Card>
        <CardHeader>
          <CardDescription className="flex flex-col items-center">
            <img src={icon} alt="icon" className="w-25" />
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
