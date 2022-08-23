import axios from "axios";
import { ApiResponse } from "..";
import { API_URL } from "../Config/.configuration";
import { LoginCredentialsDTO, UserResponse } from "./userTypes";


export const loginWithEmailAndPassword = (
    data: LoginCredentialsDTO
  ): Promise<ApiResponse<UserResponse>> => {
    return axios.post(`${API_URL}/api/auth/login`, data);
  };