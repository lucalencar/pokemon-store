import * as S from "./Perfil.styles";
import Fundo from "../../img/FundoPerfil.jpeg"
import photo from "../../img/photoAsh.jpg";
import Navbar from '../../components/Header/Navbar';
import { useFormik } from "formik";
import * as yup from "yup";


export default function Perfil() {

    const schema = yup.object({
        nome: yup.string().required("Nome obrigatorio!").max(30),
        level: yup.string().required("Level obrigatorio!"),
      });
    
      const formik = useFormik({
        initialValues: {
          nome: "",
          level: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
          console.log("SUBMIT", values);
        },
        onReset: (values) => {
          console.log("RESET", values);
          values.nome = "";
          values.level= "";
        },
      });


    return (
       <>
          <Navbar />
          <S.Img src={Fundo} className="ImgFundo" />
       
        <S.container>
            <S.FormDiv>        
                <S.caixadetexto>
                    <S.Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                        <h1 className="perfil">Meu Perfil</h1>
                        <img src={photo} className="photo"/>

                        <S.Label>Nome Completo</S.Label>
                        <S.Input type="text" 
                        name="nome"   
                        value={formik.values.nome}
                        onChange={formik.handleChange}
                        />
                        {formik.errors.nome && (  
                        <S.ErrorTip>{formik.errors.nome}</S.ErrorTip>
                        ) } 

                        <S.Label>Gênero</S.Label>
                        <select className="Genero">
                            <option value="">Feminino</option>
                            <option value="">Masculino</option>
                            <option value="">Prefiro não dizer</option>
                        </select>

                        <S.Label>Origem</S.Label>
                        <select className="Paises">
                            <option value="">Japão</option>
                            <option value="">Brazil</option>
                        </select>

                        <S.Label>Level</S.Label>
                        <S.Input type="text" name="level"
                           value={formik.values.level}
                           onChange={formik.handleChange}
                        />
                    {formik.errors.level && <S.ErrorTip>{formik.errors.level}</S.ErrorTip>}
                        <S.ButtonSalvar type="submit"> Salvar </S.ButtonSalvar>
                        <S.ButtonCancelar type="reset"> Cancelar </S.ButtonCancelar>

                    </S.Form>
                </S.caixadetexto> 
            </S.FormDiv>
        </S.container>
        </>
    );

}