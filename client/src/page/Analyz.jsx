import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
function Analyz() {
  const [code, setCode] = useState("");
  async function handelRunCode() {
    console.log("test in analyz");
    const { data } = await axios.post("http://localhost:1313/run", { code });
    console.log(data);
  }
  console.log(code);
  return (
    <div className="w-full bg-red-500 flex items-center justify-center h-screen">
      <Editor
        className="dic"
        height="75vh"
        defaultLanguage="javascript"
        defaultValue="some comment"
        theme="vs-dark"
        value={code}
        onChange={(newValue) => setCode(newValue)}
        options={{
          readOnly: false, // مطمئن شو که readOnly خاموشه
          domReadOnly: false, // گاهی این مقدار باعث فریز شدن ادیتور میشه
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />
      <button onClick={handelRunCode}>run</button>
    </div>
  );
}

export default Analyz;
