export interface ApiResponse<T> {
  message: string;
  data: T;
}

export const API_URL = `http://dev.dragonfly.psni.cc`