import React from 'react'
import * as S from "./styles";
import { Link } from 'react-router-dom';
// import { Button } from 'antd';
// import { useModalContext } from '../../hooks/modal.context';
// import Details from '../../pages/Details/Details'

const PokemonThumb = ({ image, name, type }) => {
    
// const { openModal } = useModalContext();
// const showModal = () => openModal({ Details });

    const style = type + "thumb-container";
    return (
        <S.list>   
        <S.Pokemon>
            {/* <div className="number"><small>#0{id}</small></div> */}
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3 className="NomePokemon">{name}</h3>
                <small className="TipoPokemon">Pokemon tipo {type}</small>
                {/* <Button onClick={showModal} type="primary"> */}
                <Link to = {`/details/${name}`}><p>+ detalhes</p></Link>
                    
                {/* </Button> */}

            </div>
            <S.Button> Adicionar ao carrinho </S.Button>
        </S.Pokemon>
        </S.list>   
    )
}

export default PokemonThumb