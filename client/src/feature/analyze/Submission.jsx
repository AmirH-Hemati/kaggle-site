import { Link } from "react-router-dom";
import { useMySubmission1 } from "./useMySubmission1";

function Submissions({ datasetId }) {
  const { datasets } = useMySubmission1();
  const submissions = datasets?.data;
  console.log(submissions);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">ارسالی‌های شما</h2>
      {submissions?.length === 0 ? (
        <div className="flex gap-2 font-semibold">
          {" "}
          <p className="text-gray-600">هنوز مدلی ارسال نکرده‌اید.</p>
          <Link to={`/submitModel/${datasetId}`} className="text-[#1447E6]">
            جهت ارسال مدل کلیک کنید.
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {submissions?.map((submission) => (
            <div
              key={submission._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex flex-1 items-center gap-6">
                <span className="text-lg font-semibold text-gray-800">
                  {submission.dataset.title}
                </span>
                <span className="text-sm text-gray-600">
                  جایزه: {submission.dataset.prize} تومان
                </span>
                <span className="text-sm text-gray-600">
                  مهلت ارسال:
                  {new Date(submission.dataset.deadline).toLocaleDateString(
                    "fa-IR"
                  )}
                </span>
                <span className="text-sm text-gray-600">
                  سایز: {submission.size} KB
                </span>
              </div>
              <a
                href={submission.modelFile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                مشاهده مدل
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Submissions;
