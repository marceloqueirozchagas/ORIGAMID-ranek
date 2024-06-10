import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.npoint.io/d2ced341a2f529f10581"
});

export const api = {
  get(endpoint) {
    console.log(endpoint)
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  }
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
