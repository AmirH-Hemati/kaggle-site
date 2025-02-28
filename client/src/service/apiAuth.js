import axios from "axios";
export async function signIn({ phone, role, password }) {
  const { data } = await axios.post("http://localhost:1313/api/users/signIn", {
    phone,
    role,
    password,
  });
  return data;
}

export async function login({ phone, password }) {
  const { data } = await axios.post("http://localhost:1313/api/users/login", {
    phone,
    password,
  });
  return data;
}

export async function test({ email }) {
  const { data } = await axios.post("http://localhost:1313/api/users/test", {
    email,
  });
  return data;
}
