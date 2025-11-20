// /src/app/posts/page.js

import Link from "next/link";
import Image from "next/image";
import { db } from "@/utils/dbConn"; // includes pg import so no need
import NavBar from "@/components/NavBar"; // import custom component used

export default async function GamePosts({ searchParams }) {
  // This page should display all Game posts
  // async function
  // db connection imported above.

  // fetch  gameposts
  const res = (
    await db.query(
      `SELECT gamepost.id, gameposts.* users.gamer_tag
      FROM gameposts
      JOIN users ON gameposts.user_id = users.id`
    )
  ).rows;
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
                      ...By {post.gamer_tag}{" "}
                      {/* SQL query modded to lookup gamer_tag from users table */}
                    </h1>
                    <p className="">{post.content}</p>
                    {/* date posted and image, with alt text to add here*/}
                    <p>Posted at: {post.created_at}</p>{" "}
                    {/* no doubt time stamp needs interpreting*/}
                    <Image src={post.imgurl} alt={post.imginfo} />
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
