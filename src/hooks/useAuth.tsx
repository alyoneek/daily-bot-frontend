import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  const credentials: { email: string; password: string } = JSON.parse(
    localStorage.getItem("credentials") || JSON.stringify({ email: "", password: "" }),
  );
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const login = (token: string) => {
    localStorage.setItem("token", token);
    navigate("/");
  };

  const rememberMe = (email: string, password: string) => {
    localStorage.setItem("credentials", JSON.stringify({ email, password }));
  };

  return {
    token,
    isLoggedIn: !!token,
    login,
    logout,
    credentials,
    rememberMe,
  };
};

export default useAuth;
