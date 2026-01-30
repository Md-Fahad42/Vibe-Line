import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vibe-line-a105.onrender.com/api",
  withCredentials: true,
});