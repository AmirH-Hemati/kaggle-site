import { useState } from "react";

import CodeEditor from "../feature/analyze/CodeEditor";
import Output from "../feature/analyze/Output";

function Analyz() {
  const [code, setCode] = useState("");

  return (
    <div className="relative h-full w-full p-4">
      <CodeEditor
        code={code}
        setCode={setCode}
        defaultLanguage={`python`}
        readOnly={false}
        defaultValue="Write Some Code"
      />
      <Output code={code} />
    </div>
  );
}

export default Analyz;
