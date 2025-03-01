import { useState } from "react";
import Button from "./Button";
import { useAddComment } from "../feature/comment/useAddComment";

function AddCommnet({ id }) {
  const [comment, setComment] = useState("");
  const { addComment } = useAddComment();
  function handelAddComment(e) {
    // e.preventDefault();
    addComment({ id, text: comment });
  }
  return (
    <div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="نظر خود را وارد کنید..."
        className="w-full p-4 border rounded-lg mt-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
      <Button
        type="contained"
        extraStyle="mt-4 py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-all"
        onClick={handelAddComment}
      >
        ارسال کامنت
      </Button>
    </div>
  );
}

export default AddCommnet;
