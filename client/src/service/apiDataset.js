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
export async function getAllDatasets({ search, deadline, minPrize, maxPrize }) {
  const { data } = await axiosInstance.get(
    `/dataset?search=${search}&deadline=${deadline}&minPrize=${minPrize}&maxPrize=${maxPrize}`
  );
  return data;
}
export async function getDataset(id) {
  const { data } = await axiosInstance.put(`/dataset/${id}`);
  console.log(data)
  return data;
}

export async function deleteDataset(id) {
  const { data } = await axiosInstance.delete(`/dataset/${id}`);
  return data;
}
