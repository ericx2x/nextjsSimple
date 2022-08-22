import axios from "axios";
import { ApiResponse, API_URL } from "..";
import { LoginCredentialsDTO, UserResponse } from "./userTypes";

export const loginWithEmailAndPassword = (
    data: LoginCredentialsDTO
  ): Promise<ApiResponse<UserResponse>> => {
    return axios.post(`${API_URL}/api/auth/login`, data);
  };