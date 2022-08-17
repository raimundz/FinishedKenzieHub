import { ContainerLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);
  const { addUser } = useContext(AuthContext);
  const validation = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  return (
    <ContainerLogin>
      <h1 className="logoKenzie">Kenzie Hub</h1>
      <form className="formContainer" onSubmit={handleSubmit(addUser)}>
        <h2>Login</h2>
        <label className="emailLabel">
          Email
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            name="email"
            {...register("email")}
          />
          <p className="errorMessage">{errors.email?.message}</p>
        </label>
        <label className="passwordLabel">
          Senha
          <input
            type="password"
            className="passwordInput"
            placeholder="Senha"
            name="password"
            {...register("password")}
          />
          <p className="errorMessage">{errors.password?.message}</p>
        </label>
        <button type="submit" className="loginButtonSubmit">
          Entrar
        </button>
        <h4>Ainda não possui uma conta ?</h4>
        <button
          type="button"
          className="registerButtonRedirect"
          onClick={() => navigate("/register")}
        >
          Cadastre-se
        </button>
      </form>
    </ContainerLogin>
  );
}

export default Login;
