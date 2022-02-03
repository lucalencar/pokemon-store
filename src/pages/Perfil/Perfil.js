import { useNavigate } from "react-router-dom";
import * as S from "./Perfil.styles";
import Fundo from "../../img/FundoPerfil.jpeg"
import photo from "../../img/photoAsh.jpg";
import Navbar from '../../components/Header/Navbar';



export default function Perfil() {

    const navigate = useNavigate();
    return (
       <>
          <Navbar />
          <S.Img src={Fundo} className="ImgFundo" />
       
        <S.container>

            <S.FormDiv>
                
                
            <S.caixadetexto>
                
            
           
            <S.Form>
            <h1 className="perfil">Meu Perfil</h1>
            <img src={photo} className="photo"/>
           
                           
                     
                    
                    
                    <S.Label>Nome Completo</S.Label>
                    <S.Input type="nome" name="nome"/>
                    

            
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
                    <S.Input type="nome" name="nome"/>
                    
                    <S.ButtonSalvar> Salvar </S.ButtonSalvar>
                    <S.ButtonCancelar> Cancelar </S.ButtonCancelar>

              
                    
                 
            </S.Form>
            </S.caixadetexto> 

            </S.FormDiv>

        </S.container>
        </>
    );

}