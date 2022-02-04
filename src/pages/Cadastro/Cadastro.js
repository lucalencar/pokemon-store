import { useNavigate } from "react-router-dom";
import React from "react";
import * as S from "../Cadastro/cadastro.styles";
import Fundo from "../../img/backgroundLogin.jpg"
import logo from "../../img/Logo.svg"
import { useFormik } from "formik";
import * as yup from "yup";


export default function Cadastro() {

    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string().required("Email obrigatório!").max(30),
        senha: yup.string().required("Senha obrigatório!").max(7),
      });
    
      const formik = useFormik({
        initialValues: {
          email: "",
          senha: "",
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
      <S.TituloCadastro> Faça seu Cadastro </S.TituloCadastro>
          <img src={Fundo} className="ImgFundo" />
        <S.Form onSubmit={formik.handleSubmit}>
          <S.Label> Cadastre seu e-mail</S.Label>
          <S.Input type="email" name="email"  placeholder="Digite seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (  
                <S.ErrorTip>{formik.errors.email}</S.ErrorTip>
          ) } 

          <S.Label>Cadastre sua senha</S.Label>
          <S.Input type="password" name="senha"  placeholder="Digite sua senha" 
            value={formik.values.senha}
            onChange={formik.handleChange}
          />
        {formik.errors.senha && <S.ErrorTip>{formik.errors.senha}</S.ErrorTip>}
          <S.Button type="submit" onClick={() => navigate('../login', { replace: true })}> Cadastrar</S.Button>
        
        </S.Form>
      </S.FormDiv>
    </div>
  );

}