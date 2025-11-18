"use client";

import { useCallback } from "react";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SettingsButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-red-600 hover:bg-red-700 rounded-full px-6 py-3 shadow-lg text-white font-bold hover:scale-110 active:scale-95 transition-transform"
    title="Settings"
    aria-label="Settings"
  >
    Settings
  </button>
);

const GameButton = ({ label, onClick, variant = "default" }) => {
  const baseClass =
    "bg-red-600 hover:bg-red-700 transition-colors rounded-3xl shadow-2xl transform hover:scale-105 active:scale-95 font-black text-white";
  const sizeClass =
    variant === "play" ? "px-16 py-6 text-5xl" : "px-12 py-5 text-3xl";

  return (
    <button onClick={onClick} className={`${baseClass} ${sizeClass}`}>
      {label}
    </button>
  );
};

export default function StartPage() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const handlePlayClick = useCallback(() => {
    router.push("/signup");
  }, [router]);

  const handleSignupClick = useCallback(() => {
    router.push("/signup");
  }, [router]);

  const handleRulesClick = useCallback(() => {
    console.log("Rules clicked");
  }, []);

  const handleSettingsClick = useCallback(() => {
    console.log("Settings clicked");
  }, []);

  const woodTexture = `url('https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-medium-light-wood-grain-texture-vector-image_3582007.jpg')`;

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: woodTexture,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="absolute top-8 right-8 z-50 flex gap-4 items-center">
        <SettingsButton onClick={handleSettingsClick} />

        {isSignedIn ? (
          <SignOutButton>
            <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 active:scale-95 transition">
              Sign Out
            </button>
          </SignOutButton>
        ) : (
          <SignInButton mode="modal">
            <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 active:scale-95 transition">
              Sign In
            </button>
          </SignInButton>
        )}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-16 px-4 text-center">
        <GameButton label="PLAY" onClick={handlePlayClick} variant="play" />
        <div className="flex gap-8 flex-wrap justify-center">
          <GameButton label="signup" onClick={handleSignupClick} />
          <GameButton label="Rules" onClick={handleRulesClick} />
        </div>
      </div>
    </main>
  );
}
