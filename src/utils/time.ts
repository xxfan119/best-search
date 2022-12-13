import moment from "moment";

export const DateFormater = "MMM YYYY";

export const dateFormat = (time: number) => {
  return moment.unix(time).format(DateFormater);
};
