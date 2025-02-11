import axios from "axios";
import { useState } from "react";

function SignInUploader() {
  const [email, setEmail] = useState("");
  const [data, setdata] = useState([]);

  async function handel() {
    console.log("test");
    const response = await axios.post("http://localhost:1313/api/users/test", {
      email,
    });
    console.log(response);
  }
  return (
    <div className="bg-red-500 w-full">
      <p>test</p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-gray-300"
      />
      <button onClick={handel}>click</button>
    </div>
  );
}

export default SignInUploader;
