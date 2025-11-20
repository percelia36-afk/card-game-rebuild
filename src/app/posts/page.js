// /src/app/posts/page.js

import Link from "next/link";
import { db } from "@/utils/dbConn"; // includes pg import so no need
import NavBar from "@/components/NavBar"; // import custom component used

export default async function GamePosts({ searchParams }) {
  // This page should display all Game posts
  // async function
  // db connection imported above.

  // fetch  gameposts
  const res = (await db.query(`SELECT * FROM gameposts`)).rows;
  let gamePosts = res;

  console.log(gamePosts);

  // ---- SORTING ---
  // Posts() component will need to read the searchParams
  // read the search params by doing await searchParams()
  const pageSearchParams = await searchParams;
  // tell if sortBy is asc or desc
  // if sortBy is set to something:
  // sort array of posts using sort() + reverse() on the array.
  // if no sort params sorted by as come from database (by id most likely)
  if (pageSearchParams.sortBy == "asc") {
    gamePosts = res.sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
    ); //sort ascending text - directed from page params: href="/posts?sortBy=asc"
  }

  if (pageSearchParams.sortBy == "desc") {
    gamePosts = res
      .sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1))
      .reverse(); //sort descending - directed from page params: href="/posts?sortBy=desc"
  }

  return (
    <>
      <NavBar />
      <div className="">
        <div className="">
          <h2 className="">Current Game Posts:</h2>
          <p className="">
            Click on a post to see more details and all posted comments
          </p>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* // map through my posts. Each post will have a link to the route for that post to read more of it. */}
            {gamePosts.map((post) => {
              return (
                <div key={post.id} className="">
                  <Link href={`/posts/${post.id}`}>
                    <h1 className="">
                      {post.title} <br />
                      ...By {post.user_id}{" "}
                      {/* would need to lookup username from clerk or gamer tag from users table */}
                    </h1>
                    <p className="">{post.content}</p>
                    <p></p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
