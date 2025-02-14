import { spawn } from "child_process";
import fs from "fs-extra";
export async function runCode(req, res) {
  const { code } = req.body;
  const pathFile = "temp.py";

  fs.writeFileSync(pathFile, code);
  let output = "";
  try {
    const process = spawn("python", [pathFile]);

    process.stdout.on("data", (data) => (output += data.toString()));

    process.stderr.on(
      "data",
      (data) => (output += data.toString().split("NameError").at(1))
    );
    process.on("close", () => res.json({ message: "ok", data: output }));
  } catch (error) {
    res.status(500).json({ message: "internal server error", data: null });
  }
}

// async function executePython(pathFile) {
//   return new Promise((resolve, reject) => {
//     const process = spawn("python", [pathFile]);
//     let successOutput = "";
//     let errorOutput = "";

//     process.on("close", (code) => {
//       if (code !== 0) {
//         reject(errorOutput || `Python execution failed with code ${code}`);
//       } else {
//         resolve(successOutput);
//       }
//     });
//   });
// }
