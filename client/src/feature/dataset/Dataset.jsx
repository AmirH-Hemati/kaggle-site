import { useState } from "react";
import { useGetDataset } from "./useGetDataset";
import DatasetInformation from "./DatasetInformation";
import Tabs from "../../ui/Tabs";
import AddCommnet from "../../ui/AddCommnet";
import Comments from "../../ui/Comments";
import Contact from "../../ui/Contact";
import Submission from "../analyze/Submission";

function Dataset() {
  const { dataset } = useGetDataset();
  const [activeTab, setActiveTab] = useState("comments");
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col gap-6 items-center p-4 justify-center ">
      <DatasetInformation dataset={dataset?.data} />
      <div className="flex flex-col w-full h-full sm:w-4/5 md:w-3/4 lg:w-3/4 border-2 border-gray-200 p-6 rounded-lg shadow-md bg-white">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* تب کامنت‌ها */}
        {activeTab === "comments" && <Comments />}

        {/* تب ارسال کامنت */}
        {activeTab === "addComment" && <AddCommnet id={dataset?.data?._id} />}

        {/* تب ارتباط با سازنده */}
        {activeTab === "contact" && <Contact dataset={dataset?.data} />}
        {activeTab === "submissionModel" && (
          <Submission datasetId={dataset?.data?._id} />
        )}
      </div>
    </div>
  );
}

export default Dataset;
