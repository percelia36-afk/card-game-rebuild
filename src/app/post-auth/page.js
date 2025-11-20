"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { db } from "@/utils/dbConn";

export default function PostAuth() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    const insertUser = async () => {
      try {
        await db.insert("users", {
          clerk_id: user.id,
          gamer_tag: user.username || user.firstName || "Unknown",
          firstName: user.firstName || "",
          user_profile: user.imageUrl || "",
        });
      } catch (err) {
        console.error("User insert failed:", err);
      } finally {
        router.push(`/profile/${user.id}`);
      }
    };

    insertUser();
  }, [user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-700">
      <p>Setting up your profile...</p>
    </div>
  );
}
