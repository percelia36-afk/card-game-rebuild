"use client";

import { SignUp, useUser, SignOutButton, SignInButton } from "@clerk/nextjs";

export default function SignUpPage() {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <div
      className="relative min-h-screen w-full overflow-visible z-10"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-medium-light-wood-grain-texture-vector-image_3582007.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Top-Right Controls */}
      <div className="absolute top-8 right-8 z-50 flex gap-4">
        {/* Settings Button */}
        <button
          className="bg-red-600 hover:bg-red-700 rounded-full px-6 py-3 shadow-lg text-white font-bold hover:scale-110 transition-transform"
          title="Settings"
          aria-label="Settings"
        >
          Settings
        </button>

        {/* Auth Buttons */}
        {isLoaded &&
          (isSignedIn ? (
            <SignOutButton>
              <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition">
                Sign Out
              </button>
            </SignOutButton>
          ) : (
            <SignInButton mode="modal">
              <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition">
                Sign In
              </button>
            </SignInButton>
          ))}
      </div>

      {/* Sign-Up Form */}
      <div className="flex items-center justify-center min-h-screen">
        <SignUp />
      </div>
    </div>
  );
}
