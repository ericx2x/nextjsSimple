import axios from "axios";
import { ApiResponse } from ".."
import { API_URL } from "../Config/.configuration";
import {Person} from "./personTypes"


export const getPersons = (token : string): Promise<ApiResponse<Person>> => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
  return axios.get(`${API_URL}/api/people`, config);
};

type dataPerson = {
    data: {data : Array <Person>}
}