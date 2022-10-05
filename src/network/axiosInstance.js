import { REACT_APP_OPEN_WEATHER_API_KEY } from "@env";
import axios from "axios";
import { AppConstants } from "../constants/constants";

export const AxiosInstance = axios.create({
  baseURL: AppConstants.BASE_URL,
  timeout: AppConstants.REQUEST_TIMEOUT,
  responseType: "json",
});
