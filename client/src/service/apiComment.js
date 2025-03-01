import axiosInstance from "./axiosInstance";

export async function addCommnet({ text, id }) {
  const { data } = await axiosInstance.post(`/comment/addComment/${id}`, {
    text,
  });

  return data;
}
export async function getCommnets(id) {
  const { data } = await axiosInstance.get(`/comment/${id}`);
  return data;
}
