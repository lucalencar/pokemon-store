import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import * as S from "./login.styles";
import Fundo from "../../img/backgroundLogin.jpg"
import logo from "../../img/Logo.svg"
import { useFormik } from "formik";
import * as yup from "yup";

export default function Login() {

    const navigate = useNavigate();

  const loginDefault = { email: "test@test.com", password: "123" };
  const [dados, setDados] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    if (
      loginDefault.email === dados.email &&
      loginDefault.password === dados.password
    ) {
      navigate("home");
    } else {
      alert("E-mail ou senha inválios.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };


  
  const schema = yup.object({
    email: yup.string().required("E-mail obrigatorio!").max(30),
    password: yup.string().required("Senha obrigatorio!").max(3),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("SUBMIT", values);
    }
  });


  return (
    <div title="Login">
      <S.FormDiv>
        <img src={logo}  className="Logo"/>
      <S.Titulo> Faça seu login </S.Titulo>
          <img src={Fundo} className="ImgFundo" />
        <S.Form onSubmit={formik.handleSubmit}>
          <S.Label>E-mail</S.Label>
          <S.Input type="email" name="email" onChange={handleChange} placeholder="Digite seu e-mail"
          
          />

          <S.Label>Senha</S.Label>
          <S.Input type="password" name="password" onChange={handleChange} placeholder="Digite sua senha" />

          <S.Button>Entrar</S.Button>
        </S.Form>
      </S.FormDiv>
    </div>
  );

}