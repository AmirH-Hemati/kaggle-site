import axiosInstance from "./axiosInstance";

export async function createArticle(formData) {
  const { data } = await axiosInstance.post(
    "/articles/createArticle",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return data;
}

export async function GetReportDailyArticles() {
  const { data } = await axiosInstance.get("/articles/reportDailyArticles");
  return data;
}
export async function getInActiveUsers() {
  const { data } = await axiosInstance.get("/articles/reportInActiveUsers");
  return data;
}
export async function getReportDailyArticle(id) {
  const { data } = await axiosInstance.get(
    `/articles/reportDailyArticle/${id}`
  );
  return data;
}

export async function getAllArticles({ search, deadline, minPrize, maxPrize }) {
  const { data } = await axiosInstance.get(`/articles/allArticles`);
  return data;
}
export async function getArticle(id) {
  const { data } = await axiosInstance.get(`/articles/${id}`);
  return data;
}

export async function removeArticle(id) {
  const { data } = await axiosInstance.delete(`/articles/removeArticle/${id}`);
  return data;
}
export async function updateArticle({ id, formData }) {
  const { data } = await axiosInstance.put(`/articles/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
}
