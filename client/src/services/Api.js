/* eslint-disable semi */
/* eslint-disable quotes */
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "http://localhost:8081/"
  });
};
