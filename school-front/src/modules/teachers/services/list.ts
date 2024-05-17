import axios from "axios";
import { APIS } from "../const/apis";

type TFunc = (arg: any) => void;


export const getTeachers = (functionThatUpdateTheDate: TFunc) => {
  return axios.get(APIS.LIST).then((res) => {
    functionThatUpdateTheDate(res.data);
  });
};
