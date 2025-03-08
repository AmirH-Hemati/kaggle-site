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
  const { data } = await axiosInstance.get(
    `/dataset?search=${search}&deadline=${deadline}&minPrize=${minPrize}&maxPrize=${maxPrize}`
  );
  return data;
}
export async function getDataset(id) {
  const { data } = await axiosInstance.put(`/dataset/${id}`);
  console.log(data);
  return data;
}

export async function deleteDataset(id) {
  const { data } = await axiosInstance.delete(`/dataset/${id}`);
  return data;
}
