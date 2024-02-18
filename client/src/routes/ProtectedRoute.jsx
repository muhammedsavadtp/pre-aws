import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUserCred } from "../store/slices/authSlice";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { userCred } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        // Decode the JWT token
        const decoded = jwtDecode(token);
        // Set the decoded token in the state
        dispatch(setLoggedUserCred(decoded));
      } catch (error) {
        console.error("Error decoding JWT token:", error);
      }
    } else {
      dispatch(setLoggedUserCred({ isLoggedIn: false }));
    }
  }, [token]);

  useEffect(() => {
    if (userCred?.isLoggedIn === false) {
      navigate("/signin");
    }
  }, [userCred]);

  return userCred?.isLoggedIn ? <Outlet /> : null;
};

export default ProtectedRoute;
