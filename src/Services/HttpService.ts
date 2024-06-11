// src/Services/HttpService.ts
import axios, { AxiosResponse } from 'axios';

class HttpService<T> {
  private instance = axios.create({
    baseURL: 'https://dummyjson.com', // You can set the base URL for your API
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // GET request
  public async get(url: string): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url);
  }

  // POST request
  public async post(url: string, data: T): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data);
  }

  // PUT request
  public async put(url: string, data: T): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data);
  }

  // DELETE request
  public async delete(url: string): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url);
  }
}

export default HttpService;
