import { createStore } from "@reduxjs/toolkit";
import teacherReducer from "../reducers/teacher_reducer";

const store = createStore(teacherReducer);

export default store;
