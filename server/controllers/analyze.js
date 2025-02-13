import { exec } from "child_process";
export async function runCode(req, res) {
  const { code } = req.body;
  const cleanedCode = code.replace(/\r?\n|\r/g, " ");

  exec(
    `python -c "${cleanedCode.replace(/"/g, '\\"')}"`,
    (error, stdout, stderr) => {
      console.log("errr", error);
      if (error) {
        return res.json({ message: stderr || error.message, data: null });
      }
      console.log(stdout);
      res.json({ message: "ok", data: stdout });
    }
  );
}
