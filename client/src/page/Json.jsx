import { useState } from "react";
import { JsonEditor } from "json-edit-react";

function Json() {
  const [json, setJson] = useState({
    key: "value",
    key1: "value",
    key2: "value",
    key23: "value",
    key24: "value",
    key25: "value",
    key26: "value",
    key232: "value",
    key2543: "value",
    key2432: "value",
    key254321: "value",
    key25435415432221: "value",
    key2542144321: "value",
    key2546423432321: "value",
    key25634321: "value",
    key25421532321: "value",
    key257564321: "value",
    key25464321: "value",
    key25432451: "value",
    key25644321: "value",
    key254432321: "value",
    key254432132321: "value",
    key254343221: "value",
    key254643254321: "value",
    key25432641: "value",
    key2547y5321: "value",
    key25436543221: "value",
    key254432654321: "value",
    key25434221: "value",
  });
  console.log(json);
  return (
    <div className="w-full">
      <JsonEditor
        data={json}
        setData={setJson}
        rootName="فایل جیسون خود را اضافه کنید"
        maxWidth={"100%"}
      />
    </div>
  );
}

export default Json;
