import axiosInstance from "./axiosInstance";

export async function createFile(formData) {
  const { data } = await axiosInstance.post("/dataset/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
}

export async function myUploads() {
  const { data } = await axiosInstance.get("/dataset/myUploads");
  return data;
}
export async function getAllDatasets() {
  const { data } = await axiosInstance.get("/dataset");
  return data;
}
export async function getDataset(id) {
  const { data } = await axiosInstance.put(`/dataset/${id}`);
  return data;
}
