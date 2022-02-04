
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Badges from '../components/Badges';
import * as S from '../components/Pokemons/Cards.style';
// import Modal from '../components/Modal/Modal';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
const Cards = ( { url } ) => {



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
    const png = '.png';
    const [ pokemon, setPokemon ] = useState({ types: [] });
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(res => setPokemon(res));
    }, []);

    function zeroFill(number, width) {
        width -= number.toString().length;
        if(width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + "";
    }

    return (
        <Fragment>
            <S.Card>
                    
                <div className="properties properties2 mb-30">
                    <div className="properties__card">
                        <div className="properties__img overlay1">
                            <Link to={`/pokemon/`}>
                                <img src={`${imgURL}${pokemon.id}${png}`} className='ImgPokemon' alt={pokemon.name} />
                            </Link>
                        </div>
                        <div className="properties__caption">
                            <h3 className="NomePokemon">
                               {pokemon.name}
                            </h3>
                            <S.TipoPokemon> Pokemon tipo 
                                {pokemon.types.map(item =>
                                    <Badges key={item.id} {...item} />
                                )}
                            </S.TipoPokemon>
                            {/* <button
                            className="openModalBtn"
                            onClick={() => {
                            setModalOpen(true);
                            }}
                        >
                             + Detalhes
                            </button>

                        {modalOpen && <Modal setOpenModal={setModalOpen} />} */}

                    <S.ButtonDetalhes type="button" onClick={handleOpen}>
                            + Detalhes
                    </S.ButtonDetalhes>
                            <S.Price> R$1000,00</S.Price>
                            <S.Button> Adicionar ao carrinho</S.Button>

                        {/* CARD */}
                            <S.StyledModal
                                aria-labelledby="unstyled-modal-title"
                                aria-describedby="unstyled-modal-description"
                                open={open}
                                onClose={handleClose}
                                BackdropComponent={S.Backdrop}
                                >
                                <S.Box>
                                    <h2 id="unstyled-modal-title">Text in a modal</h2>
                                    <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
                                </S.Box>
                            </S.StyledModal>
                        </div>
                    </div>
                </div>
            </S.Card>
        </Fragment>
    );
};

export default Cards;

