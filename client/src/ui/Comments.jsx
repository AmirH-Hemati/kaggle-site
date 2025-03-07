import { useState } from "react";
import { useGetComments } from "../feature/comment/useGetComments";
import Button from "./Button";
import { useAddReplies } from "../feature/comment/useAddReplies";

function Comments() {
  const { comments } = useGetComments();
  const { addReplies } = useAddReplies();
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
  };
  const submitReply = (commentId) => {
    if (replyText == "") return;
    addReplies({ id: commentId, text: replyText });
    setReplyText("");
  };

  return (
    <div>
      {comments?.data?.length > 0 ? (
        <div className="space-y-4">
          {comments?.data?.map((c, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md border space-y-4 border-gray-200"
            >
              {/* اطلاعات کامنت اصلی */}
              <div className="flex gap-4 text-gray-600 items-center">
                <p className="font-semibold text-lg text-gray-800">
                  {c?.userName || "کاربر"}
                </p>
                <p className="text-sm">
                  {new Date(c?.createdAt).toLocaleDateString("fa-IR")}
                </p>
              </div>
              <p className="text-gray-600 font-semibold text-md">{c?.text}</p>

              {/* دکمه پاسخ دادن */}
              <button
                onClick={() => handleReply(c?._id)}
                className="mt-2 text-blue-500 hover:underline text-sm"
              >
                پاسخ دادن
              </button>

              {/* فرم ارسال پاسخ */}
              {replyingTo === c?._id && (
                <div className="mt-2 space-y-2">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="پاسخ خود را بنویسید..."
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <Button onClick={() => submitReply(c?._id)} type="contained">
                    ارسال پاسخ
                  </Button>
                </div>
              )}

              {/* نمایش پاسخ‌ها */}
              {c?.replies?.length > 0 && (
                <div className="mt-4 space-y-3 pl-6 border-l-2 border-gray-300">
                  {c.replies.map((reply, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-100 rounded-md shadow-sm"
                    >
                      <div className="flex gap-3 text-gray-600 items-center">
                        <p className="font-semibold text-gray-800">
                          {reply?.userName || "کاربر"}
                        </p>
                        <p className="text-xs">
                          {new Date(reply?.createdAt).toLocaleDateString(
                            "fa-IR"
                          )}
                        </p>
                      </div>
                      <p className="text-gray-700">{reply?.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">هیچ کامنتی برای این دیتاست وجود ندارد.</p>
      )}
    </div>
  );
}

export default Comments;
