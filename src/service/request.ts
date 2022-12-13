import axios, { AxiosRequestConfig } from "axios";
import { APIBaseUrl } from "../config";

export enum Method {
  POST = "POST",
  GET = "GET",
}
const instance = axios.create({
  baseURL: APIBaseUrl,
  timeout: 60 * 1000,
  method: "POST",
});

instance.interceptors.response.use(function (response) {
  return response.data;
});

function request<Req>(config: AxiosRequestConfig) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  const customRequest: {
    cancel?: () => void;
  } & Promise<Req> = instance.request({
    ...config,
    cancelToken: source.token,
  });

  customRequest.cancel = () => {
    // todo 打点
    source.cancel();
  };

  return customRequest;
}

export default request;
