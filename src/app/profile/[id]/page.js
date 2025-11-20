"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/utils/dbConn";

export default function UserProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const result = await db
          .select("*")
          .from("users")
          .where({ clerk_id: id })
          .limit(1);

        if (result.length > 0) {
          setProfile(result[0]);
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };

    fetchProfile();
  }, [id]);

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{profile.gamer_tag}</h1>
      <img
        src={profile.user_profile}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <p>Clerk ID: {profile.clerk_id}</p>
    </div>
  );
}
