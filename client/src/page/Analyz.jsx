import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import axiosInstance from "../service/axiosInstance";
import Button from "../ui/Button";
function Analyz() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  async function handelRunCode() {
    console.log("test in analyz");
    const { data } = await axiosInstance.post(
      "http://localhost:1313/api/analyze/run",
      {
        code,
      }
    );
    setOutput(data.data);
  }
  console.log(code);
  return (
    <div className="relative h-full w-full p-4">
      <div className="border-2 border-black/30  h-1/2">
        <Editor
          height={`50%`}
          defaultLanguage="javascript"
          defaultValue="Write Your Code"
          theme="vs-light"
          value={code}
          onChange={(newValue) => setCode(newValue)}
          options={{
            readOnly: false, // مطمئن شو که readOnly خاموشه
            domReadOnly: false, // گاهی این مقدار باعث فریز شدن ادیتور میشه
            minimap: { enabled: false },
            automaticLayout: true,
            fontSize: "25px",
          }}
        />
      </div>
      <div className="h-1/2 text-black p-4 flex flex-col gap-2 border-t-2 border-black/30">
        <p className="text-xl font-semibold">خروجی</p>
        <div className="flex-1  border-2 border-black/30 p-4 rounded-sm">
          {output}
        </div>
      </div>
      <Button
        extraStyle={`w-24 absolute top-2 right-2`}
        type={`contained`}
        onClick={handelRunCode}
      >
        اجرا
      </Button>
    </div>
  );
}

export default Analyz;
