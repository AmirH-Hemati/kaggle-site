import { useMySubmission } from "../feature/analyze/useMySubmission";
import DatasetList from "../feature/dataset/DatasetList";

function MySubmissionPage() {
  const { datasets } = useMySubmission();
  const a = datasets?.data?.map((dataset) => ({
    ...dataset.dataset,
    userName: dataset?.user?.userName,
  }));
  console.log(a)
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">مجموعه داده‌های من</h1>
      {datasets?.length === 0 ? (
        <p>شما هنوز مدلی ارسال نکرده‌اید.</p>
      ) : (
        <DatasetList datasets={a} />
      )}
    </div>
  );
}

export default MySubmissionPage;
{
  /* <div
                key={dataset._id}
                className="bg-white shadow-lg rounded-lg p-4"
              >
                <h2 className="text-xl font-semibold">{dataset.title}</h2>
                <p className="text-gray-600 mb-2">{dataset.description}</p>
                <div className="mt-4">
                  <p>حجم فایل مدل: {dataset.modelFile}</p>
                  <p>حجم فایل مدل: {dataset.size} KB</p>
                </div>
              </div> */
}
