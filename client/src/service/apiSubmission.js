import axiosInstance from "./axiosInstance";

export async function submitModel({ formData, id }) {
  const { data } = await axiosInstance.post(`/submit/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return { data };
}

export async function mySubmissions() {
  const { data } = await axiosInstance.get("/submit/mySubmissions");
  return data;
}
export async function mySubmission(id) {
  const { data } = await axiosInstance.get(`/submit/mySubmission/${id}`);
  return data;
}
