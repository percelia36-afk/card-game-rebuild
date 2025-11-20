//  /scr/app/posts/[id]/page.js

import { db } from "@/utils/dbConn"; // import db connection no need ofr import pg
import AddComment from "@/components/AddComment"; // import custom component used
import ShowComments from "@/components/ShowComments"; // import custom component used
import NavBar from "@/componenets/NavBar"; // import custom component used

export default async function Page({ params }) {
  // the dynamic route that will display the game post information, and it's comments

  // need the route parameters
  const { id } = await params;

  const res = await db.query(`SELECT * FROM m8_blog_posts WHERE id = $1`, [id]);
  const gamePost = res.rows[0];

  return (
    <>
      <NavBar />
      <div className="">
        <div className="container mx-auto p-4">
          {/* post and "add comment" form next to each other */}
          {/* display post information */}
          <div className="">
            <h2 className="">
              {post.title} <br />
              ...By {post.username}
            </h2>
            <p className="">{post.content}</p>
          </div>

          {/* the component needs to know the id of the post it has to fetch comments for */}
          <AddComment id={id} />
        </div>
        <div className="container mx-auto p-4">
          {/* comments below the post + "add comment" form */}
          <ShowComments id={id} />
        </div>
      </div>
    </>
  );
}
