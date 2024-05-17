import { GETALL } from "../types/teachers";

export default function teacherReducer(state: any, action: any) {
  switch (action.type) {
    case GETALL:
      return {
        ...state,
        teachers: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
