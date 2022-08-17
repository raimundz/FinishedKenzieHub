import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  useEffect(() => {}, []);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const userRegister = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        console.log(response);

        Swal.fire(
          "Usuário cadastrado com sucesso",
          "redirecionando...",
          "success"
        );
        navigate("/");
      })
      .catch(
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email ja castrado!",
        })
      );
  };
  const addUser = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        setUser(response);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        window.localStorage.setItem("userName", response.data.user.name);
        Swal.fire("Logado com sucesso", "redirecionando...", "success");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuário não cadastrado",
        });
      });
  };

  return (
    <AuthContext.Provider value={{ addUser, userRegister, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
