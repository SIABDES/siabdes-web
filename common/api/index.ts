import axios from "axios";
import { BACKEND_URL, WILAYAH_URL } from "../configs";

export const AxiosNoAuth = axios.create({
  baseURL: BACKEND_URL,
});

export const AxiosAuthed = (token: string) =>
  axios.create({
    baseURL: BACKEND_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const AxiosClientSide = axios.create({
  baseURL: "/api",
});

export const AxiosWilayah = axios.create({
  baseURL: WILAYAH_URL,
});
