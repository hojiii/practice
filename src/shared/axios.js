import axios from "axios";
import { cookies } from "./cookie";

const token = cookies.get("token");

export const apis = axios.create({
  baseURL: "http://3.38.191.164",
  headers: {
    authorization: `Bearer ${token}`,
  },
});
