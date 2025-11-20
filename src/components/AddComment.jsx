// /src/components/AddComment.jsx

import { db } from "@/utils/dbConn";

export default function AddComment({ id }) {
  // import pg and all the setting up etc.

  async function handleSubmit(formData) {
    "use server";
    // do our database stuff in here on submit

    // the formData is passed automatically the the handlesubmit on submission
    // INSERT INTO COMMENTS WHERE POST = 1 (just an example)
    // maybe revalidate?
  }
  return (
    <div className="container mx-auto p-4">
      <form action={handleSubmit} className="">
        {/* inputs - remember to give them a name prop */}
        <input
          name="username"
          placeholder="Enter Username"
          required
          className=""
        />
        <textarea
          name="comment"
          placeholder="Comment Here..."
          rows="4"
          required
          className=""
        />
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </div>
  );
}
