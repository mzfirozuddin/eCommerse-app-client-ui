import axios from "axios";

//: Create a axios instance
const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, //: This tells Axios to send cookies along with the request to the server.
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//: Now handle the api
export const login = (data) => {
  return api.post("/api/auth/login", data);
};
