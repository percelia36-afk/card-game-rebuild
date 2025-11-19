import Link from "next/link";

export default function MenuButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-12">
      {/* PLAY */}
      <button className="bg-red-600 text-black font-bold py-3 px-16 rounded hover:bg-red-700 transition">
        PLAY
      </button>

      {/* SIGNUP */}
      <Link href="/signup">
        <button className="bg-red-600 text-black font-bold py-3 px-16 rounded hover:bg-red-700 transition">
          Signup
        </button>
      </Link>

      {/* RULES */}
      <Link href="/rules">
        <button className="bg-red-600 text-black font-bold py-3 px-16 rounded hover:bg-red-700 transition">
          Rules
        </button>
      </Link>

      {/* SETTINGS */}
      <Link href="/settings">
        <button className="bg-red-600 text-black font-bold py-3 px-16 rounded hover:bg-red-700 transition">
          Settings
        </button>
      </Link>
    </div>
  );
}
