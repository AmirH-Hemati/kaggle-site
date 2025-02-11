import axios from "axios";
export async function signIn({ userName, email, password, role }) {
  try {
    const { data } = await axios.post(
      "http://localhost:1313/api/users/signIn",
      {
        userName,
        email,
        password,
        role,
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
