import Layout from "./layout";
import NavBar from "@/components/NavBar";
import GetLatestPost from "@/components/GetLatestPost";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p>
          This is the main landing page. Posts will be handled by another
          teammate.
        </p>
        <p>Latest Post is included below</p>
        <GetLatestPost />
      </main>
    </>
  );
}
