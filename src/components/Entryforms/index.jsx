import Navbar from '../Navbar'
import './index.css'
import { BsBalloonHeart, BsExclamationCircle } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { IoIosLock } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import CategoryOption from '../CategoryOption';
import { BsFilter } from "react-icons/bs";
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
const settingsList = [
    {
        id: 1,
        categorySettingName: 'Appearence',
        settingIcon: <BsBalloonHeart className='category-icon' />,
        description: 'Dark and Light mode, Font size',
    },
    {
        id: 2,
        categorySettingName: 'Your Restaurent',
        settingIcon: <SiHomeassistantcommunitystore className='category-icon' />,
        description: 'Dark and Light mode, Font size',
    },
    {
        id: 3,
        categorySettingName: 'Product Maganagement',
        settingIcon: <TbCircleDashedPercentage className='category-icon' />,
        description: 'Manage Your Product,Pricing.,etc',
    },
    {
        id: 4,
        categorySettingName: 'Notifiaction',
        settingIcon: <FaRegBell className='category-icon' />,
        description: 'Customize Your notification',
    },
    {
        id: 5,
        categorySettingName: 'Security',
        settingIcon: <IoIosLock className='category-icon' />,
        description: 'Configure password, PIN..etc',
    },
    {
        id: 6,
        categorySettingName: 'About',
        settingIcon: <BsExclamationCircle className='category-icon' />,
        description: 'Find Out more about posly',
    },
]
const EntryForms = () => {
    const [categoryActId, setCategoryActId] = useState(settingsList[0].id)
    const changeCategory = (id) => {
        setCategoryActId(id)
    }
    return (
        <div className='Home-main-container'>
            <div className='nav-bar'>
                <Navbar />
            </div>
            <div className='entry-forms-main-card'>
                <div className='entry-form-content-card'>
                    <h1 className='entry-forms-main-heading'>Settings</h1>
                    <div className='entry-forms-settings-main-card'>
                        <ul className='entry-forms-categories-card'>
                            {settingsList.map((eachItem) => (
                                <CategoryOption optionDetails={eachItem} key={eachItem.id} changeCategory={changeCategory} isCategoryActive={categoryActId === eachItem.id} />
                            ))}
                        </ul>
                        <div className='manage-categories-main-card'>
                            <div className="categories-manage-header">
                                <h3 className='order-name'>Product Management</h3>
                                <button className='filter-card'><BsFilter style={{marginRight: '10px'}} />Manage Categories</button>
                            </div>
                            <ul className='manage-products-main-ul-card'>
                                <li className='add-product-card'>
                                    <div className='add-product-sub-card'>
                                        <FiPlus style={{marginBottom: '15px'}} />
                                        <p>Add New Product</p>
                                    </div>
                                </li>
                                <li className='edit-product-card'>
                                    <div className='add-product-sub-card'>
                                        <img src='https://tse2.mm.bing.net/th?id=OIP.bSuUc4tvdrZUHtvQXR9-XAHaHa&pid=Api&P=0&h=180' className='edit-image' />
                                        <p className='edit-dish-name-styles'>KFC chiken legs</p>
                                        <p className='edit-dish-price-styles'>$20</p>
                                    </div>
                                    <button className='edit-button-card'><MdEdit style={{marginRight: '10px'}} />Edit Dish</button>
                                </li>
                                <li className='edit-product-card'>
                                    <div className='add-product-sub-card'>
                                        <img src='https://tse2.mm.bing.net/th?id=OIP.bSuUc4tvdrZUHtvQXR9-XAHaHa&pid=Api&P=0&h=180' className='edit-image' />
                                        <p className='edit-dish-name-styles'>KFC chiken legs</p>
                                        <p className='edit-dish-price-styles'>$20</p>
                                    </div>
                                    <button className='edit-button-card'><MdEdit style={{marginRight: '10px'}} />Edit Dish</button>
                                </li><li className='edit-product-card'>
                                    <div className='add-product-sub-card'>
                                        <img src='https://tse2.mm.bing.net/th?id=OIP.bSuUc4tvdrZUHtvQXR9-XAHaHa&pid=Api&P=0&h=180' className='edit-image' />
                                        <p className='edit-dish-name-styles'>KFC chiken legs</p>
                                        <p className='edit-dish-price-styles'>$20</p>
                                    </div>
                                    <button className='edit-button-card'><MdEdit style={{marginRight: '10px'}} />Edit Dish</button>
                                </li>
                                <li className='edit-product-card'>
                                    <div className='add-product-sub-card'>
                                        <img src='https://tse2.mm.bing.net/th?id=OIP.bSuUc4tvdrZUHtvQXR9-XAHaHa&pid=Api&P=0&h=180' className='edit-image' />
                                        <p className='edit-dish-name-styles'>KFC chiken legs</p>
                                        <p className='edit-dish-price-styles'>$20</p>
                                    </div>
                                    <button className='edit-button-card'><MdEdit style={{marginRight: '10px'}} />Edit Dish</button>
                                </li><li className='edit-product-card'>
                                    <div className='add-product-sub-card'>
                                        <img src='https://tse2.mm.bing.net/th?id=OIP.bSuUc4tvdrZUHtvQXR9-XAHaHa&pid=Api&P=0&h=180' className='edit-image' />
                                        <p className='edit-dish-name-styles'>KFC chiken legs</p>
                                        <p className='edit-dish-price-styles'>$20</p>
                                    </div>
                                    <button className='edit-button-card'><MdEdit style={{marginRight: '10px'}} />Edit Dish</button>
                                </li>
                                <li className='edit-product-card'>
                                    <div className='add-product-sub-card'>
                                        <img src='https://tse2.mm.bing.net/th?id=OIP.bSuUc4tvdrZUHtvQXR9-XAHaHa&pid=Api&P=0&h=180' className='edit-image' />
                                        <p className='edit-dish-name-styles'>KFC chiken legs</p>
                                        <p className='edit-dish-price-styles'>$20</p>
                                    </div>
                                    <button className='edit-button-card'><MdEdit style={{marginRight: '10px'}} />Edit Dish</button>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EntryForms