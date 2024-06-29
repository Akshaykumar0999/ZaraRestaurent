import { useState, useEffect, useContext } from 'react';
import DishesTabItem from '../DishesTabItem';
import Navbar from '../Navbar'
import './index.css'
import { FiSearch } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';
import DishDetailsCard from '../DishDetailsCard';
import CartList from '../CartList';
import { useDispatch, useSelector } from 'react-redux';
import {add,remove,increment,decrement,setTotalAmount, clearCart} from "../../store/cartSlice";
const RestroItemsTabList = [
    {
        TabId: 'HOTDISHES',
        TabName: 'Hot Dishes',
    }, {
        TabId: 'COLDDISHES',
        TabName: 'Cold Dishes',
    }, {
        TabId: 'SOUP',
        TabName: 'Soup',
    }, {
        TabId: 'GRILL',
        TabName: 'Grill',
    }, {
        TabId: 'APPETIZER',
        TabName: 'Appetizer',
    }, {
        TabId: 'DESSERT',
        TabName: 'Dessert',
    },
]

const TableNumberList = [
    {
        id: 1,
        number: 1,
    },
    {
        id: 2,
        number: 2,
    },{
        id: 3,
        number: 3,
    },{
        id: 4,
        number: 4,
    },{
        id: 5,
        number: 5,
    },{
        id: 6,
        number: 6,
    },{
        id: 7,
        number: 7,
    },{
        id: 8,
        number: 8,
    },
    {
        id: 9,
        number: 9,
    },
    {
        id: 10,
        number: 10,
    },

]


const Home = () => {
    const dispatch=useDispatch();
    const {cart}=useSelector((state)=>state);
    console.log(cart.cart.length)
    useEffect(()=>{
        dispatch(setTotalAmount());
    },)
    const [AllRestroDishesList, setAllRestroDishesList] = useState([])
    const [AllTabList, setAllTabList] = useState([])
    const [ActiveTabItem, setActiveTabItem] = useState(RestroItemsTabList[0].TabId)
    const [selectedTableNo, setSelectedTableNo] = useState(1)
    const [tableModelShow,setTablesModelShow]=useState(false);
    const [tableNo, setTableNo] = useState(1)
    const [cartDishesList, setCartDishesList] = useState([])
    let showdate = new Date();
    let todaysDate = showdate.toUTCString();
    const currentDate = todaysDate.slice(0, 16)


    useEffect(() => {
        fetch("https://resbackend.gharxpert.in/getCategories", {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        }).then((data) => data.json()).then((res) => {
            const updatedTabList = res.categories.map((eachList =>
            ({
                id: eachList.id,
                companyId: eachList.companyId,
                categoryName: eachList.category_name,
                description: eachList.description,
                image: eachList.image,
                createdAt: eachList.created_at,
                updatedAt: eachList.updated_at,
            })
            ))
            setAllTabList(updatedTabList)
        })
            .catch((error) => { console.log(error) });
    }, [])

    useEffect(() => {
        fetch("https://resbackend.gharxpert.in/getProducts", {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        }).then((data) => data.json()).then((res) => {
            const updatedList = res.products.map((eachList =>
            ({
                id: eachList.id,
                name: eachList.name,
                imageUrl: eachList.image,
                price: eachList.price,
                quantity: 1,
            })
            ))
            setAllRestroDishesList(updatedList)
        })
            .catch((error) => { console.log(error) });
    }, [])

    const onClickActiveTab = (id) => {
        setActiveTabItem(id)
    }

    const onChangeTabelNo = (event) => {
        setSelectedTableNo(event.target.value)
    }

    const onClickSelectDish = (item) => {
        dispatch(add(item))
    }

    const onChangeQtyItem = (value, id) => {
        const cartActiveItem = cartDishesList.findIndex(
            item => item.id === id
        )
    }

    const TableModelShowCard = () => {
        setTablesModelShow(true)
    }

    console.log(tableNo)

    const TableNumbers = () => {
        return (
            <Modal show={tableModelShow} onHide={() => setTablesModelShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-secondary'>Table No Management</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className='table-numbers-card'>
                        {TableNumberList.map(eachTable => (
                            <li className='table-button-li-card' key={eachTable.id} onClick={(id) => setTableNo(id)}>{eachTable.number}</li>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
        )
    }

    return (
        <div className='Home-main-container'>
            <div className='nav-bar'>
                <Navbar />
            </div>
            <div className='home-page-products-container'>
                {/* Home-page-headers-container */}
                <div className='home-page-headers-card'>
                    <div>
                        <h1 className='title-of-restro-name'>ZARA RESTAURANT</h1>
                        <p className='current-date'>{currentDate}</p>
                    </div>
                    <div className='serach-bar-container'>
                        <FiSearch className='search-icon' />
                        <input type='search' className='search-bar-card' placeholder='Search for Food, drinks, ext..' />
                    </div>
                </div>

                {/* Product Details Tab Selctor container */}
                <ul className='tablist-ul-card'>
                    {AllTabList.map((eachDish) => <DishesTabItem dishDetails={eachDish} key={eachDish.id} isActive={ActiveTabItem === eachDish.id} onClickActiveTab={onClickActiveTab} />)}
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
                    <div className='d-flex'>
                        <button className='active-order-type'>Dine In</button>
                        <button className='order-type'>To go</button>
                        <button className='order-type'>Delivery</button>
                    </div>
                    <button className='tables-order-type' onClick={TableModelShowCard}>Tables</button>
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
                            {cart.cart.map(eachacartItem => (
                                <CartList cartItemmDetails={eachacartItem} key={eachacartItem.id} onChangeQtyItem={onChangeQtyItem} />
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
                            <p className='discount-value'>{cart.totalAmount}<span className='price-text'>Rs</span></p>
                        </div>
                        <button className='order-place-button' onClick={async()=>{
                            try {
                                const response=await fetch(`https://resbackend.gharxpert.in/place_order2`,{
                                    method:"POST",
                                    headers:{
                                        "Authorization" : localStorage.getItem('token')     
                                        ,"Content-Type" : "application/json"
                                    },
                                    body : JSON.stringify(cart)
                                    
                                })
                                const res=await response.json();
                                console.log(res);
                                if(res.order_id){
                                    
                                    
                                  
                                    localStorage.setItem("orderId",res.order_id);
                                    alert(res.message);
                                    dispatch(clearCart())
                                    return;
                                }
                                alert(res.message);
                              
                            } catch (error) {
                                alert(error.message);
                            }
                        }}>Continue to Place Order</button>
                    </div>
                    
                </div>

                 {TableNumbers()}
            </div>

    
    )
}

export default Home