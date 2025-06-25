// import axios from "axios";
// import store from "../../redux/store/store";

// const instance = axios.create({
// // .. where we make our configurations
//     BASE_URL: process.env.REACT_APP_API_URL || "http://localhost:4000",
//     timeout: 5000,
//     headers: {
//     "Content-Type": "application/json",
//   },
// });


// instance.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     return response.data;
//   },
//   (error) => {
//     console.log(error);
//     if (error.response.status === 401) {
//       store.dispatch({
//         type: "LOGOUT",
//       });
//     }
//     return Promise.reject(error);
//   }
// );
// // export default instance;
// src/utils/axios/index.ts
import axios from "axios";
import store from "../../redux/store/store";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000",
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("AxiosError", error);
    if (error.response && error.response.status === 401) {
      store.dispatch({ type: "LOGOUT" });
    }
    return Promise.reject(error);
  }
);

export default instance;
