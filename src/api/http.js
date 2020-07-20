import axios from "axios";

import Config from "../config/AppSetting";
import { store } from "../redux/store";

const API_ROOT = Config.BASE_URL;

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => handleError(error)
);

const handleError = (error) => {
  if (error.response) {
    const { status } = error.response;
    if (status === 401) {
      // dispatch logout
      // store.dispatch(logout());
    }
  }
  return Promise.reject(error.response || error.request || error.message);
};

const setHeader = () => {
  let token = null;
  if (store) {
    token = store.getState().login.token;
  }
  if (token) {
    http.setAuthorizationHeader(token);
  }
};

const http = {
  setAuthorizationHeader(accessToken) {
    axios.defaults.headers.Authorization = `${accessToken}`;
  },
  request(config = {}) {
    return axios.request(config);
  },
  get(url, config = {}) {
    setHeader();
    return axios.get(url, config);
  },
  post(url, data = {}, config = {}) {
    setHeader();
    return axios.post(url, data, config);
  },
  put(url, data = {}, config = {}) {
    setHeader();
    return axios.put(url, data, config);
  },
  patch(url, data = {}, config = {}) {
    setHeader();
    return axios.patch(url, data, config);
  },
  delete(url, config = {}) {
    setHeader();
    return axios.delete(url, config);
  },
  postUploadFile(url, data = {}) {
    setHeader();
    let formData = new FormData();
    data.photos.forEach((photo) => {
      formData.append("photos", {
        uri: photo,
        type: "image/jpg",
        name: `${new Date().getTime()}.jpg`,
      });
    });

    return this.post(url, formData);
  },
};

export default http;
