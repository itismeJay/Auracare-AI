"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { LogOut, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Logout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await authClient.signOut();
      router.push("/"); // redirect after logout
    } catch (error) {
      console.error("Logout failed:", error);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Fullscreen loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <Loader2 className="h-12 w-12 animate-spin text-white" />
        </div>
      )}

      {/* Logout button */}
      <Button onClick={handleLogout} disabled={loading} className="btn">
        Logout <LogOut className="size-4" />
      </Button>
    </>
  );
}
