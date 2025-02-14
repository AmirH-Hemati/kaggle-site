import { Editor } from "@monaco-editor/react";

function CodeEditor({
  code,
  setCode,
  defaultLanguage,
  readOnly,
  defaultValue,
}) {
  return (
    <div className="border-2 border-black/30  h-full">
      <Editor
        height={`100%`}
        defaultLanguage={defaultLanguage}
        defaultValue={defaultValue}
        theme="vs-light"
        value={code}
        onChange={(newValue) => setCode(newValue)}
        options={{
          readOnly: readOnly,
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
