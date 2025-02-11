import axios from "axios";
export async function signIn({ userName, email, password, role }) {
  try {
    const { data } = await axios.post("http://localhost:1313/users/signIn", {
      userName,
      email,
      password,
      role,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
