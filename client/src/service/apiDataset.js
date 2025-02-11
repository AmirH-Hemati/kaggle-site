import axios from "axios";

export async function createFile(formData) {
  const { data } = await axios.post("http://", formData);
  return data;
}
