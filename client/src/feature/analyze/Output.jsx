import { useState } from "react";
import Button from "../../ui/Button";
import axiosInstance from "../../service/axiosInstance";

function Output({ code }) {
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

  return (
    <>
      <div className="h-1/2 text-black p-4 flex flex-col gap-2 border-t-2 border-black/30">
        <p className="text-xl font-semibold">خروجی</p>
        <div className="flex-1  border-2 border-black/30 p-4 rounded-sm text-lg">
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
    </>
  );
}

export default Output;
