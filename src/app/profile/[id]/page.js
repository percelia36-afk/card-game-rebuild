"use client";

import { SignUp } from "@clerk/nextjs";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/dbConn";

export default function SignUpPage() {
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;

    const insertUser = async () => {
      try {
        await db.insert("users", {
          clerk_id: user.id,
          gamer_tag: user.username || user.firstName || "Unknown",
          user_profile: user.imageUrl || "",
        });
      } catch (err) {
        console.error("User insert failed or already exists:", err);
      }
    };

    // Delay to ensure Clerk session is stable
    const timer = setTimeout(() => insertUser(), 1000);
    return () => clearTimeout(timer);
  }, [user]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignUp
        path="/sign-up"
        routing="path"
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold",
          },
        }}
      />
    </div>
  );
}
