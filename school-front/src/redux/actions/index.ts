import axios from "axios";
import { ADD_NEW, GETALL } from "../types/teachers";
import { TTeacher } from "../../modules/teachers/types/list";

export const getAllTeachers = () => {
  
  const data = axios.get("http://localhost:8000/api/teachers").then((res) => {
    return res.data.data;
  });

  return {
    type: GETALL,
    payload: data,
  };
};

export const addNewTeacher = (formValues: Partial<TTeacher>) => {
  
  const data = axios.post("http://localhost:8000/api/teachers", formValues).then((res) => {
    return res;
  });

  return {
    type: ADD_NEW,
    payload: data,
  };
};
