import { setLoggedUserCred } from "../store/slices/authSlice";
import store from "../store/store";
import api, { HEADERS } from "./serverConfig";

//signup
export const signUp = async (obj) => {
  try {
    const response = await api.post("auth/signup", obj.body, HEADERS.common);
    localStorage.setItem("token", response.data.token);
    store.dispatch(setLoggedUserCred({ isLoggedIn: true }));
    obj.navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//signin
export const signIn = async (obj) => {
  try {
    const response = await api.post("auth/signin", obj.body, HEADERS.common);
    localStorage.setItem("token", response.data.token);
    store.dispatch(setLoggedUserCred({ isLoggedIn: true }));
    obj.navigate("/");
  } catch (error) {
    console.log(error);
  }
};
