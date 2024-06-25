import { useState, useEffect } from 'react';
import DishesTabItem from '../DishesTabItem';
import Navbar from '../Navbar'
import './index.css'
import { FiSearch } from "react-icons/fi";

import DishDetailsCard from '../DishDetailsCard';
import CartList from '../CartList';

const RestroItemsTabList = [
    {
        TabId:'HOTDISHES', 
        TabName: 'Hot Dishes',
    },{
        TabId:'COLDDISHES', 
        TabName: 'Cold Dishes',
    },{
        TabId:'SOUP', 
        TabName: 'Soup',
    },{
        TabId:'GRILL', 
        TabName: 'Grill',
    },{
        TabId:'APPETIZER', 
        TabName: 'Appetizer',
    },{
        TabId:'DESSERT', 
        TabName: 'Dessert',
    },
]

// const AllRestroDishesList =[
//     {
//         id: 1,
//         name: 'Special ChikenBiryani',
//         price: 500,
//         category: 'HOTDISHES',
//         imageUrl: '/images/1.jpeg'
//     },
//     {
//         id: 2,
//         name: 'Chiken Biryani',
//         price: 300,
//         category: 'HOTDISHES',
//         imageUrl: '/images/2.jpeg'
//     },
//     {
//         id: 3,
//         name: 'Special MuttonBiryani',
//         price: 650,
//         category: 'HOTDISHES',
//         imageUrl: '/images/3.jpeg'
//     },
//     {
//         id: 4,
//         name: 'Mutton Biryani',
//         price: 500,
//         category: 'HOTDISHES',
//         imageUrl: '/images/4.jpeg'
//     },
//     {
//         id: 5,
//         name: 'Chiken Mandi(special)',
//         price: 300,
//         category: 'HOTDISHES',
//         imageUrl: '/images/5.jpeg'
//     },
//     {
//         id: 6,
//         name: 'Chiken Mandi',
//         price: 250,
//         category: 'HOTDISHES',
//         imageUrl: '/images/6.jpeg'
//     },
//     {
//         id: 7,
//         name: 'Mutton Juicy Mandy',
//         price: 800,
//         category: 'HOTDISHES',
//         imageUrl: '/images/1.jpeg'
//     },
//     {
//         id: 8,
//         name: 'Mutton Mandy',
//         price: 550,
//         category: 'HOTDISHES',
//         imageUrl: '/images/4.jpeg'
//     },
// ]

const Home = () => {
    const [AllRestroDishesList, setAllRestroDishesList] = useState([])
    const [ActiveTabItem, setActiveTabItem] = useState(RestroItemsTabList[0].TabId)
    // const [qty, setQty] = useState(1)
    const [selectedTableNo, setSelectedTableNo] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartDishesList, setCartDishesList] = useState([])
    let showdate = new Date();
    let todaysDate = showdate.toUTCString();
    const currentDate = todaysDate.slice(0,16)

    useEffect(()=>{
        fetch("https://resbackend.gharxpert.in/getProducts", {
            method:"GET",
            headers:{
              "Authorization" : localStorage.getItem('token')
            }}).then((data)=>data.json()).then((res) => {
                const updatedList = res.products.map((eachList => 
                    ({
                        id: eachList.id,
                        name: eachList.product_name,
                        imageUrl: eachList.image,
                        price: eachList.unit_price,
                        quantity: 1,
                    })
                ))
                setAllRestroDishesList(updatedList)
            })
        .catch((error)=>{console.log(error)});
      },[])
    const onClickActiveTab = (id) => {
        setActiveTabItem(id)
    }
    const onChangeTabelNo = (event) => {
        setSelectedTableNo(event.target.value)
    }

    const onClickSelectDish = (id) => {
        const cartItemId = AllRestroDishesList.findIndex(
            item => item.id === id 
        )
        setCartDishesList([...cartDishesList, AllRestroDishesList[cartItemId]])
        const cartObject = AllRestroDishesList[cartItemId]
        setTotalPrice(prevState => (prevState + parseInt(cartObject.price)))
    }

    const onChangeQtyItem = (value, id) => {
        const cartActiveItem = cartDishesList.findIndex(
            item => item.id === id 
        )
        // setCartDishesList({...cartDishesList[cartActiveItem], price: cartDishesList[cartActiveItem].price*value})
        // const updatedprice = (cartDishesList[cartActiveItem].price) * value
        // cartDishesList.map((eachItem) => {
        //     setCartDishesList(eachItem.id === id && ({...eachItem, price: updatedprice}))
        // })
    }
    


    // const onClickSelectDish = (id) => {
    //     const cartItemId = AllRestroDishesList.findIndex(
    //         item => item.id === id 
    //     )
    //     const cartItem = AllRestroDishesList[cartItemId]
    //     const newItem = { ...cartItem, quantity: 1 }  // Initialize quantity to 1
    
    //     setCartDishesList([...cartDishesList, newItem])
    //     setTotalPrice(prevState => (prevState + parseInt(cartItem.price)))
    // }
    
    // const onChangeQtyItem = (value, id) => {
    //     const updatedCartList = cartDishesList.map(item => {
    //         if (item.id === id) {
    //             const updatedPrice = item.price / item.quantity * value  // Calculate new price based on quantity
    //             return { ...item, quantity: value, price: updatedPrice }
    //         }
    //         return item
    //     })
    
    //     setCartDishesList(updatedCartList)
    
    //     // Recalculate total price
    //     const newTotalPrice = updatedCartList.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    //     setTotalPrice(newTotalPrice)
    // }
    // console.log(cartDishesList)

    return (
        <div className='Home-main-container'>
            <div className='nav-bar'>
                <Navbar />
            </div>
            <div className='home-container'>
                <div className='home-page-products-container'>
                    {/* Home-page-headers-container */}
                    <div className='home-page-headers-card'>
                        <div>
                            <h1 className='title-of-restro-name'>ZARA RESTAURENT</h1>
                            <p className='current-date'>{currentDate}</p>
                        </div>
                        <div className='serach-bar-container'>
                            <FiSearch className='search-icon' />
                            <input type='search' className='search-bar-card' placeholder='Search for Food, coffee, ext..'/>
                        </div>
                    </div>

                    {/* Product Details Tab Selctor container */}
                    <ul className='tablist-ul-card'>
                        {RestroItemsTabList.map((eachDish) => <DishesTabItem dishDetails={eachDish} key={eachDish.TabId} isActive={ActiveTabItem === eachDish.TabId} onClickActiveTab={onClickActiveTab} />)}
                    </ul>

                    {/* Dishes Headers Container */}
                    <div className='All-dishes-headers-card'>
                        <h3 className='choose-dishes'>Choose Dishes</h3> 
                        <div className='table-selector-container'>
                            <p className='table-name'>Table</p>
                            <select className='table-selctor-container' onChange={onChangeTabelNo}>
                                <option className='table-option'>1</option>
                                <option className='table-option'>2</option>
                                <option className='table-option'>3</option>
                                <option className='table-option'>4</option>
                                <option className='table-option'>5</option>
                                <option className='table-option'>6</option>
                                <option className='table-option'>7</option>
                                <option className='table-option'>8</option>
                            </select>
                        </div>
                    </div>

                    {/* All Dishes Item List */}
                    <ul className='all-restro-dishes-ul-container'>
                        {AllRestroDishesList.map((eachdishItem, index) =>
                            (
                                <DishDetailsCard dishDetails={eachdishItem} key={index} onClickSelectDish={onClickSelectDish} />
                            )
                        )}
                    </ul>
                </div>
                <div className='orders-list-cart-container'>
                    <h1 className='choose-dishes'>Order#1234567890</h1>
                    <div className='order-category-type'>
                        <h3 className='active-order-type'>Dine In</h3>
                        <h3 className='order-type'>To go</h3>
                        <h3 className='order-type'>Delivery</h3>
                    </div>
                    {/* orders acrt list table  */}
                        
                    <table className='table-orders-cart-list'>
                        <thead className='table-order-cart-headers'>
                            <th className='table-cart-header-name'>Name</th>
                            <th className='table-cart-header-qty'>Qty</th>
                            <th className='table-cart-header-qty'>Price</th>
                        </thead>
                        <tbody className='table-body-container'>
                            <div className='cartList-ul-container'>
                                {cartDishesList.map(eachacartItem  => (
                                    <CartList cartItemmDetails={eachacartItem} key={eachacartItem.id} onChangeQtyItem={onChangeQtyItem} />
                                    // <div className='table-order-cart-list-card'>
                                    //     <tr className='table-order-cart-list-items'>
                                    //         <td className='table-cart-header-name'><img src={eachacartItem.imageUrl} className='table-cart-image' /><div><p>{eachacartItem.name}</p><span className='cart-rate-of-item'>{eachacartItem.price}</span><span className='price-text'>Rs</span></div></td>
                                    //         <td className='table-cart-header-qty'><input type='number' className='qty-input' value={qty} placeholder='1' onChange={onChangeQnty} /></td>
                                    //         <td className='table-cart-header-qty'>{qty*eachacartItem.price}<span className='price-text'>Rs</span></td>
                                    //     </tr>
                                    //     <div className='comment-cart-card'>
                                    //         <input type='text' placeholder='Order Note...' className='order-cart-comment-input'/>
                                    //         <button className='order-cart-delete-button' ><AiOutlineDelete /></button>
                                    //     </div>
                                    // </div>
                                ))}
                            </div> 
                            
                        </tbody>
                    </table>

                    
                    <div className='order-cart-pric-container'>
                        <div className='discount-card'>
                            <h3 className='discount-headre'>Discount</h3>
                            <p className='discount-value'>0<span className='price-text'>Rs</span></p>
                        </div>
                        <div className='discount-card'>
                            <h3 className='discount-headre'>Subtotal</h3>
                            <p className='discount-value'>{totalPrice}<span className='price-text'>Rs</span></p>
                        </div>
                        <button className='order-place-button'>Continue to Place Order</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home