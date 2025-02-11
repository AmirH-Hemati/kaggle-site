import axiosInstance from "./axiosInstance";

export async function createFile(formData) {
  const { data } = await axiosInstance.post("/dataset/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
}
