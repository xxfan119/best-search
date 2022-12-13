export interface ListReq {
  login_token: string;
  search_phrase: string;
}

export interface ListItem {
  name: string;
  search_msv: {
    date: string;
    sv: number;
  }[];
  created_at: number;
  updated_at: number;
  growth: number;
}

export interface ListResp {
  data: {
    product_trends: ListItem[];
  };
}
