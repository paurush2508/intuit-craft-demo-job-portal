export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate() - 10).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const generateUpdatedURL = (apiKey) => {
  const currentDate = getCurrentDate();
  const baseURL = "https://newsapi.org/v2/top-headlines";
  const queryString = `?q=tech&from=${currentDate}&sortBy=publishedAt&apiKey=${apiKey}`;
  return baseURL + queryString;
};
