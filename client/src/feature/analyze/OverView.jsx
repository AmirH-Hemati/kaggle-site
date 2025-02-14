import { useEffect, useState } from "react";
import { useGetDataset } from "../dataset/useGetDataset";
import axios from "axios";
import CodeEditor from "./CodeEditor";
function OverView() {
  const { dataset } = useGetDataset();
  const [code, setCode] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await axios.get(dataset?.data?.fileUrl || "");

      setCode(JSON.stringify(response.data, null, 2));
    }
    getData();
  }, [dataset?.data?.fileUrl]);
  console.log(code);
  return (
    <div className="w-full h-full">
      <CodeEditor
        code={code}
        setCode={setCode}
        defaultLanguage={`json`}
        readOnly={true}
      />
    </div>
  );
}

export default OverView;
