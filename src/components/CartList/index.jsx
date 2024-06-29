import { useDispatch, useSelector } from 'react-redux';

import { remove,increment,decrement} from '../../store/cartSlice';
import './index.css'
import { AiOutlineDelete,AiFillPlusSquare,AiFillMinusSquare } from "react-icons/ai";
import { FaSquarePlus } from "react-icons/fa6";
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
                <td className='table-cart-header-name'><img src={imageUrl} className='table-cart-image' /><div><p>{name}</p><span className='cart-rate-of-item'>{price}</span><span className='price-text'>Rs</span></div></td>
                <button className='order-cart-delete-button' onClick={()=>{
                    dispatch(decrement(id))
                }}>
                <AiFillMinusSquare/>
                </button>
                <td className='table-cart-header-qty'><input type='text' className='qty-input' placeholder={qty} onChange={onChangeQnty} /></td>
                <button className='order-cart-delete-button' onClick={()=>{
                    dispatch(increment(id));
                }} style={{margin:0}}>
                <AiFillPlusSquare/>
                </button>
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