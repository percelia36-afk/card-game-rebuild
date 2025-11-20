"use client";
// /src/components/DeleteCommentButton.jsx

// this must be a client component on top line of file
export default function DeleteCommentButton({ commentId, handleDelete }) {
  return (
    <button
      className="m-2"
      onClick={() => {
        handleDelete(commentId);
      }}
    >
      Remove This Comment
    </button>
  );
}
