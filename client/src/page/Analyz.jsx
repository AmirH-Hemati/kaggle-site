import { useState } from "react";

import CodeEditor from "../feature/analyze/CodeEditor";
import Output from "../feature/analyze/Output";

function Analyz() {
  const [code, setCode] = useState("");

  return (
    <div className="relative h-full w-full p-4">
      <div className="w-full h-2/3">
        <CodeEditor
          code={code}
          setCode={setCode}
          readOnly={false}
          defaultLanguage={`python`}
          defaultValue="Write Some Code"
        />
      </div>
      <Output code={code} />
    </div>
  );
}

export default Analyz;
