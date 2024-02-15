import axios from "axios";
import { BACKEND_URL, WILAYAH_URL } from "../configs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth-options";

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

export const AxiosToBackend = axios.create({
  baseURL: BACKEND_URL,
});

AxiosToBackend.interceptors.request.use(async (config) => {
  const session = await getServerSession(authOptions);

  if (session) {
    config.headers.Authorization = `Bearer ${session.backendTokens.accessToken}`;
  }

  return config;
});
