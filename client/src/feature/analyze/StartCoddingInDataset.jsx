import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import Output from "./Output";
import { useGetDataset } from "../dataset/useGetDataset";
import axios from "axios";

function StartCoddingInDataset() {
  const { dataset } = useGetDataset();
  const [toggleCode, setToggleCode] = useState(false);
  const [code, setCode] = useState(`print("Hello my friend")`);
  const [jsonCode, setJsonCode] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await axios.get(dataset?.data?.fileUrl || "");

      setJsonCode(JSON.stringify(response.data, null, 2));
    }
    getData();
  }, [dataset?.data?.fileUrl]);
  return (
    <div className="relative w-full h-full ">
      <div className="h-2/3 flex flex-row-reverse">
        <div className="w-[10%] flex flex-col gap-4 items-center py-3 border-r-2 border-black/30">
          <p
            className={`${
              !toggleCode && "border-r-2 border-black bg-[#F8F9FA]"
            } w-full p-2 cursor-pointer`}
            onClick={() => setToggleCode(false)}
          >
            داده ها{" "}
          </p>
          <p
            className={`${
              toggleCode && "border-r-2 border-black bg-[#F8F9FA]"
            } w-full p-2 cursor-pointer`}
            onClick={() => setToggleCode(true)}
          >
            ادیتور کد
          </p>
        </div>
        <div className="w-[90%]">
          {toggleCode ? (
            <CodeEditor
              code={code}
              setCode={setCode}
              readOnly={false}
              defaultLanguage="python"
              defaultValue='def my_function():
               print("Hello from a function")'
            />
          ) : (
            <CodeEditor
              code={jsonCode}
              setCode={setJsonCode}
              readOnly={true}
              defaultLanguage={`json`}
            />
          )}
        </div>
      </div>
      <Output code={code} />
    </div>
  );
}

export default StartCoddingInDataset;
