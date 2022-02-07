import * as S from './Carrinho.style';
import TrashIcon from '../../img/trash.svg';
import useCart from '../../hooks/useCart';

export default function ShopItem() {

    const { cartList, removeCart, addQuantity, removeQuantity, total, formatPrice, imgUrl } = useCart();

    return (
        <div>
            <S.ItemDiv>
                {cartList.items.map((cart, id) => (
                    <S.PokeItem key={id}>
                        <S.Img src={imgUrl(`${cart.image}`)} />                        
                        <S.ItemLeft>
                            <S.PokemonName key={id}>{cart.name}</S.PokemonName>
                        </S.ItemLeft>
                        <S.ItemLeft>
                            <S.AddRemove 
                            onClick={() => {
                                cart.quantity >= 2 ?
                                    removeQuantity(cart.id) :
                                    console.log('nothing');
                            }}>-</S.AddRemove>
                            <S.Input type={"text"} size="2" onChange={(e) => e.preventDefault} value={cart.quantity} />
                            <S.AddRemove onClick={() => addQuantity(cart.id)}>+</S.AddRemove>
                        </S.ItemLeft>
                        <S.ItemRight><S.TextoPreco>{formatPrice(`${cart.price}`)}</S.TextoPreco></S.ItemRight>
                        <S.ItemRight><S.TextoPreco>{formatPrice(`${cart.price}` * `${cart.quantity}`)}</S.TextoPreco></S.ItemRight>
                        <S.IconItem>
                            <S.Icon key={id} onClick={() => removeCart(cart)} src={TrashIcon}></S.Icon>
                        </S.IconItem>
                    </S.PokeItem>
                ))}
            </S.ItemDiv>
            <S.TotalDiv>
                <S.ItemRight>
                    <S.TextoTotal>Total: {formatPrice(`${total}`)}</S.TextoTotal>
                    </S.ItemRight>
            </S.TotalDiv>
        </div>
    );
}