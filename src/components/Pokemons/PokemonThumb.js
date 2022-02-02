import React from 'react'
import * as S from "./styles";
import { Link } from 'react-router-dom';
import '../../pages/Details/styles.css';

const PokemonThumb = ({ image, name, type }) => {
    
    // function abrirModal() {
    //     document.getElementById('modal').style.top = "0%";
    
    // }


    const style = type + "thumb-container";
    return (
        <S.list>   
        <S.Pokemon>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3 className="NomePokemon">{name}</h3>
                <small className="TipoPokemon">Pokemon tipo {type}</small>

                {/* <button class="open-modal" onClick={abrirModal()}> */}
                <Link to = {`/details/${name}`}><p>+ detalhes</p></Link>
                {/* </button> */}
            </div>
            <S.Button> Adicionar ao carrinho </S.Button>
        </S.Pokemon>
        </S.list>   
    )
}

export default PokemonThumb