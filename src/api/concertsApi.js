import axios from "axios";

const concertsApi = axios.create({
  baseURL: "http://localhost:3000/concerts",
});

export const getConcerts = async () => {
  const res = await concertsApi.get("/");

  return res.data;
};
