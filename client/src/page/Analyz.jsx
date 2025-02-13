import { useState } from "react";
import { Editor } from "@monaco-editor/react";
function Analyz() {
  const [code, setCode] = useState("");
  console.log(code);
  return (
    <div
      style={{ direction: "ltr" }}
      className="w-full bg-red-500 flex items-center justify-center h-screen"
    >
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
    </div>
  );
}

export default Analyz;
