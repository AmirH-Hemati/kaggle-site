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


// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Button from "../../ui/Button";
// import { toast } from "react-toastify";

// function EditModelPage() {
//   const { id } = useParams();
//   const [modelData, setModelData] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     file: null,
//   });

//   // دریافت اطلاعات مدل از سرور و پر کردن فرم
//   useEffect(() => {
//     async function fetchModel() {
//       try {
//         const response = await fetch(`/api/models/${id}`);
//         const data = await response.json();
//         setModelData(data);
//         setFormData({
//           title: data.title,
//           description: data.description,
//           file: null, // آپلود فایل جدید اختیاری است
//         });
//       } catch (error) {
//         toast.error("خطا در دریافت اطلاعات مدل");
//       }
//     }
//     fetchModel();
//   }, [id]);

//   // مدیریت تغییر ورودی‌ها
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "file") {
//       setFormData((prev) => ({ ...prev, file: files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // ارسال فرم و به‌روزرسانی مدل
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fd = new FormData();
//     fd.append("title", formData.title);
//     fd.append("description", formData.description);
//     if (formData.file) {
//       fd.append("file", formData.file);
//     }
//     try {
//       const response = await fetch(`/api/models/${id}`, {
//         method: "PUT",
//         body: fd,
//       });
//       if (!response.ok) throw new Error("خطا در به‌روزرسانی مدل");
//       toast.success("مدل با موفقیت به‌روزرسانی شد!");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   if (!modelData) {
//     return <p className="text-center text-gray-600">در حال بارگذاری...</p>;
//   }

//   return (
//     <div className="container mx-auto p-6 bg-gray-50">
//       <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">ویرایش مدل</h1>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//           <div>
//             <label className="block text-lg font-semibold text-gray-700 mb-2">عنوان مدل</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-semibold text-gray-700 mb-2">توضیحات مدل</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
//               placeholder="توضیحات مدل را وارد کنید..."
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-semibold text-gray-700 mb-2">
//               آپلود فایل جدید (اختیاری)
//             </label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
//             />
//           </div>
//           <Button type="contained" extraStyle="w-full py-3 text-lg">
//             ذخیره تغییرات
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditModelPage;
