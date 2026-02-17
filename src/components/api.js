import axios from "axios";

const api = axios.create({
  baseURL: "https://a079-114-10-13-116.ngrok-free.app",
  timeout: 5000
});

export default api;
