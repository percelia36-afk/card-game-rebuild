// src/components/GetLatestPost.jsx
import Link from "next/link";
import Image from "next/image";
import { db } from "@/utils/dbConn";

export default async function GetLatestPost() {
  "use server";
  const res = await db.query(
    `SELECT gameposts.id, gameposts.*, users.gamer_tag
          FROM gameposts
          JOIN users ON gameposts.user_id = users.id
          ORDER BY gameposts.id DESC LIMIT 1`
  );
  let post = res;
  console.log(res);
  console.log(post);

  return (
    <div className="">
      {/* <Link href={`/posts/${post.id}`}> link removed as failing*/}
      <h1 className="">
        {post.title} <br />
        ...By {post.gamer_tag}{" "}
        {/* would need to lookup username from clerk or gamer tag from users table */}
      </h1>
      <p className="">{post.content}</p>
      <p>Posted at: {post.created_at}</p>{" "}
      {/* no doubt time stamp needs interpreting*/}
      {/* <Image src={post.imgurl} alt={post.imginfo} />  image unlikely to work so commented out*/}
      {/* </Link> link removed as failing */}
    </div>
  );
}
