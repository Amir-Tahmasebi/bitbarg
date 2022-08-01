import axios, { AxiosInstance } from "axios";

class HttpClient {
  private baseURL: string;
  private instance: AxiosInstance;

  constructor() {
    this.baseURL = "https://api.bitbarg.me/api/v1/";
    this.instance = axios.create({
      baseURL: this.baseURL,
      headers :{}
    });
  }

  public get(endpoint: string, config: object = {}) {
    return this.instance.get(endpoint, config);
  }

  public post(endpoint: string, params: object, config: object = {}) {
    return this.instance.post(endpoint, params, config);
  }
}

const client = new HttpClient();
export default client;