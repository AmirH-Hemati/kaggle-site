import { useGetComments } from "../feature/comment/useGetComments";

function Comments() {
  const { comments } = useGetComments();
  return (
    <div>
      {comments?.data?.length > 0 ? (
        <div className="space-y-4">
          {comments?.data?.map((c, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200"
            >
              <p className="font-semibold text-gray-800">{c?.userName}</p>
              <p className="text-gray-600">{c?.text}</p>
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
