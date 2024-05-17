import axios from "axios"
import { APIS } from "../const/apis";
import { TUpdateFunction } from "../type/services.types";


export const getCourses = (updateFunction: TUpdateFunction) => {
    axios.get(APIS.LIST).then(res => {
        updateFunction(res.data)
    })
}