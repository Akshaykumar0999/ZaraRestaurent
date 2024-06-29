import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../store/cartSlice';
import './index.css'
import { AiOutlineDelete } from "react-icons/ai";

const CartList = ({cartItemmDetails, onChangeQtyItem}) => {
    const dispatch=useDispatch();
    const {id, imageUrl, name, price,qty,subTotal} = cartItemmDetails
    const onChangeQnty = (e) => {
        onChangeQtyItem(e.target.value, id)
    }
    return (
        <div className='table-order-cart-list-card'>
            <tr className='table-order-cart-list-items'>
                <td className='table-cart-header-name'><img src={imageUrl} className='table-cart-image' /><div><p style={{marginBottom: '0px'}}>{name}</p><span className='cart-rate-of-item'>{price}</span><span className='price-text'>Rs</span></div></td>
                <td className='table-cart-header-qty'><input type='text' className='qty-input' placeholder={qty} onChange={onChangeQnty} /></td>
                <td className='table-cart-header-qty'>{subTotal}<span className='price-text'>Rs</span></td>
            </tr>
            <div className='comment-cart-card'>
                <input type='text' placeholder='Order Note...' className='order-cart-comment-input' />
                <button className='order-cart-delete-button' onClick={()=>{
                   dispatch(remove(id));
                }}><AiOutlineDelete /></button>
            </div>
        </div>
    )
}

export default CartList