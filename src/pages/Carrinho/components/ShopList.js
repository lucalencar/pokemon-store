import * as S from './Carrinho.style';
import TrashIcon from '../../../img/trash.svg';
import useCart from '../../../hooks/useCart';


export default function ShopItem() {

    const { cartList, removeCart, addQuantity, removeQuantity, total } = useCart();

    return (
        <div>
            <S.ItemDiv>
                {cartList.items.map((cart, id) => (
                    <S.PokeItem key={id}>
                        <S.Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/32c1010100b5eef988264517e96209d70e0b1d48/sprites/pokemon/other/dream-world/${cart.image}.svg`} />
                        <S.ItemLeft>
                            <S.PokemonName key={id}>{cart.name}</S.PokemonName>
                        </S.ItemLeft>
                        <S.ItemLeft>
                            <S.AddRemove onClick={() => {
                                cart.quantity >= 1 ?
                                    removeQuantity(cart.id) :
                                    console.log('nothing');
                            }}>-</S.AddRemove>
                            <S.Input type={"text"} size="2" onChange={(e) => e.preventDefault} value={cart.quantity} />
                            <S.AddRemove onClick={() => addQuantity(cart.id)}>+</S.AddRemove>
                        </S.ItemLeft>
                        <S.ItemRight><S.TextoPreco>{parseFloat(`${cart.price}`).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.TextoPreco></S.ItemRight>
                        <S.ItemRight><S.TextoPreco>{parseFloat(`${cart.price}` * `${cart.quantity}`).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.TextoPreco></S.ItemRight>
                        <S.IconItem>
                            <S.Icon key={id} onClick={() => removeCart(cart)} src={TrashIcon}></S.Icon>
                        </S.IconItem>
                    </S.PokeItem>
                ))}
            </S.ItemDiv>
            <S.TotalDiv>
                <S.ItemRight>
                    <S.TextoTotal>Total: {parseFloat(`${total}`).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.TextoTotal>
                    </S.ItemRight>
            </S.TotalDiv>
        </div>
    );
}