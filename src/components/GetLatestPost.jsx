// src/components/GetLatestPost.jsx
import Link from "next/link";
import Image from "next/image";

export default async function GetLatestPost() {
  "use server";
  const res = await db.query(
    `SELECT gamepost.id, gameposts.* users.gamer_tag
          FROM gameposts
          JOIN users ON gameposts.user_id = users.id
          ORDER BY gameposts.id DESC LIMIT 1`
  );
  let post = res[0];

  return (
    <div className="">
      <Link href={`/posts/${post.id}`}>
        <h1 className="">
          {post.title} <br />
          ...By {post.gamer_tag}{" "}
          {/* would need to lookup username from clerk or gamer tag from users table */}
        </h1>
        <p className="">{post.content}</p>
        <p>Posted at: {post.created_at}</p>{" "}
        {/* no doubt time stamp needs interpreting*/}
        <Image src={post.imgurl} alt={post.imginfo} />
      </Link>
    </div>
  );
}
