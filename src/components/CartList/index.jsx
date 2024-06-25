import './index.css'
import { AiOutlineDelete } from "react-icons/ai";

const CartList = ({cartItemmDetails, onChangeQtyItem}) => {
    const {id, imageUrl, name, price} = cartItemmDetails
    const onChangeQnty = (e) => {
        onChangeQtyItem(e.target.value, id)
    }
    return (
        <div className='table-order-cart-list-card'>
            <tr className='table-order-cart-list-items'>
                <td className='table-cart-header-name'><img src={imageUrl} className='table-cart-image' /><div><p>{name}</p><span className='cart-rate-of-item'>{price}</span><span className='price-text'>Rs</span></div></td>
                <td className='table-cart-header-qty'><input type='number' className='qty-input' placeholder='0' onChange={onChangeQnty} /></td>
                <td className='table-cart-header-qty'>{price}<span className='price-text'>Rs</span></td>
            </tr>
            <div className='comment-cart-card'>
                <input type='text' placeholder='Order Note...' className='order-cart-comment-input' />
                <button className='order-cart-delete-button' ><AiOutlineDelete /></button>
            </div>
        </div>
    )
}

export default CartList