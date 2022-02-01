import { useNavigate } from "react-router-dom";
import * as S from "./Perfil.styles";



export default function Perfil() {

    const navigate = useNavigate();

    return (

        <S.container>

            <S.FormDiv>
            <S.caixadetexto>
            <S.Form>
           
                           
                    <h1>Meu Perfil</h1>
                    <img></img>
                    <S.Label>Nome Completo</S.Label>
                    <S.Input type="nome" name="nome"/>

            
                    <S.Label>Gênero</S.Label>
                    <select name="genero">
                        <option value="">Feminino</option>
                        <option value="">Masculino</option>
                        <option value="">Prefiro não dizer</option>
                    </select>

                    <S.Label>Origem</S.Label>
                    <select name="paises">
                        <option value="">Japão</option>
                        <option value="">Brazil</option>
                    </select>

                    <S.Label>Level</S.Label>
                    <S.Input type="nome" name="nome"/>
                    
                    <S.Button> Salvar </S.Button>
                    <S.Button> Cancelar </S.Button>

              
                    
                 
            </S.Form>
            </S.caixadetexto> 

            </S.FormDiv>

        </S.container>

    );

}