import request from "../../service/request";
import { keyWordSearch } from "../../service/urls";
import { ListReq, ListResp } from "./interface";

export function fetchList(params: ListReq) {
  return request<ListResp>({
    url: keyWordSearch,
    data: params,
  });
}
