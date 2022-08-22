import axios from "axios";
import { ApiResponse, API_URL } from ".."
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