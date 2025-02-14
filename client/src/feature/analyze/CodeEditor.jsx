import { Editor } from "@monaco-editor/react";

function CodeEditor({ code, setCode }) {
  return (
    <div className="border-2 border-black/30  h-1/2">
      <Editor
        height={`50%`}
        defaultLanguage="javascript"
        defaultValue="Write Your Code"
        theme="vs-light"
        value={code}
        onChange={(newValue) => setCode(newValue)}
        options={{
          readOnly: false,
          domReadOnly: false,
          minimap: { enabled: false },
          automaticLayout: true,
          fontSize: "25px",
        }}
      />
    </div>
  );
}

export default CodeEditor;
