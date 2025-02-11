import axios from "axios";
export async function signIn({ userName, email, password, role }) {
  const { data } = await axios.post("http://localhost:1313/api/users/signIn", {
    userName,
    email,
    password,
    role,
  });
  return data;
}

export async function login({ email, password }) {
  const { data } = await axios.post("http://localhost:1313/api/users/login", {
    email,
    password,
  });
  return data;
}
