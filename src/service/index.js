import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
