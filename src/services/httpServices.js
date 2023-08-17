import axios from "axios";

const http = {
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  get: axios.get,
};

export default http;
