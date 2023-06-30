import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const login = (token: string) => {
    localStorage.setItem("token", token);
    navigate("/");
  };

  return {
    token,
    isLoggedIn: !!token,
    login,
    logout,
  };
};

export default useAuth;
