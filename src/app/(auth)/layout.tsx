"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { QueryProvider } from "@/components/query-provider";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathName = usePathname();
  const isSignIn = pathName == "/sign-in";
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto border max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" alt="Logo" height={56} width={152} />

          <Button variant="secondary" asChild>
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
              {isSignIn ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          <QueryProvider>{children}</QueryProvider>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
