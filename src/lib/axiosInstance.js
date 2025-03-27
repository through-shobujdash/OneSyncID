import axios from "axios";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5010/api";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // যদি কুকি বা অ্যাথেনটিকেশন দরকার হয়
});

export default axiosInstance;
