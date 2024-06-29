import Navbar from '../Navbar'
import { useEffect, useState } from 'react';
import './index.css'
import { BsBalloonHeart, BsExclamationCircle } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { IoIosLock } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import CategoryOption from '../CategoryOption';
import { BsFilter } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';



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
    const [AllRestroDishesList, setAllRestroDishesList] = useState([])

    const [lgShow, setLgShow] = useState(false);
    const [editShowModle, setEditShowModel] = useState(false)
    const changeCategory = (id) => {
        setCategoryActId(id)
    }


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

    const AddProductModel = () => {
        return (
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add New Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='product-form-container'>
                        <form className='product-form-card' >
                            <div className='input-container' >
                                <label className='model-input-label' htmlFor='product-name'>Product Name</label>
                                <input className='model-input-card' name='name' type='text' placeholder='Products-Name' id='product-name' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Price'>Price</label>
                                <input className='model-input-card' name='price' type='number' placeholder='Products-Price' id='Price' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='MRP'>Product MRP</label>
                                <input className='model-input-card' name='mrp' type='number' placeholder='MRP' id='MRP' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Discount'>Discount</label>
                                <input className='model-input-card' name='discount' type='number' placeholder='Discount' id='Discount' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='category-types'>Product Category Type</label>
                                <select className='model-selct-card' name='subCategoryid' id='category-types' >
                                    <option className='options-card' value={11}>Chiken Dishes</option>
                                    <option className='options-card' value={11}>Mutton Dishes</option>
                                    <option className='options-card' value={11}>Fish Dishes</option>
                                    <option className='options-card' value={11}>Cold Drinks</option>
                                </select>
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='product-image'>Product Image</label>
                                <input name='image' type='file' placeholder='Products-image' id='product-image' />
                            </div>
                            <button className='model-button-card' type='submit'>Enter Product</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }

    const EditProductModel = () => {
        return (
            <Modal
                size="lg"
                show={editShowModle}
                onHide={() => setEditShowModel(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='product-form-container'>
                        <form className='product-form-card' >
                            <div className='input-container' >
                                <label className='model-input-label' htmlFor='product-name'>Product Name</label>
                                <input className='model-input-card' name='name' type='text' placeholder='Products-Name' id='product-name' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Price'>Price</label>
                                <input className='model-input-card' name='price' type='number' placeholder='Products-Price' id='Price' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='MRP'>Product MRP</label>
                                <input className='model-input-card' name='mrp' type='number' placeholder='MRP' id='MRP' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Discount'>Discount</label>
                                <input className='model-input-card' name='discount' type='number' placeholder='Discount' id='Discount' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='category-types'>Product Category Type</label>
                                <select className='model-selct-card' name='subCategoryid' id='category-types' >
                                    <option className='options-card' value={11}>Chiken Dishes</option>
                                    <option className='options-card' value={11}>Mutton Dishes</option>
                                    <option className='options-card' value={11}>Fish Dishes</option>
                                    <option className='options-card' value={11}>Cold Drinks</option>
                                </select>
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='product-image'>Product Image</label>
                                <input name='image' type='file' placeholder='Products-image' id='product-image' />
                            </div>
                            <button className='model-button-card' type='submit'>Enter Product</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }

    const newProductOpenModule = () => {
        setLgShow(true)
    }
    return (
        <div className='home-container'>
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
                            {categoryActId === 3 ? 
                            <div className='manage-categories-main-card'>
                                <div className="categories-manage-header">
                                    <h3 className='order-name'>Product Management</h3>
                                    <button className='filter-card'><BsFilter style={{ marginRight: '10px' }} />Manage Categories</button>
                                </div>
                                <ul className='manage-products-main-ul-card'>
                                    <li className='add-product-card' onClick={newProductOpenModule}>
                                        <div className='add-product-sub-card'>
                                            <FiPlus style={{ marginBottom: '15px' }} />
                                            <p>Add New Product</p>
                                        </div>
                                    </li>
                                    {AllRestroDishesList.map((eachitem) => (
                                        <li className='edit-product-card'>
                                            <div className='add-product-sub-card'>
                                                <img src={eachitem.imageUrl} className='edit-image' />
                                                <p className='edit-dish-name-styles'>{eachitem.name}</p>
                                                <p className='edit-dish-price-styles'>{eachitem.price}</p>
                                            </div>
                                            <button className='edit-button-card' onClick={() => setEditShowModel(true)}><MdEdit style={{ marginRight: '10px' }} />Edit Dish</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            :
                            <div className='manage-categories-main-card'>
                                <h1 style={{color : '#ffffff', marginTop: '25%', alignSelf: 'center', fontSize: '20px'}}>This page is cuurrntly not Available</h1>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {AddProductModel()}
            {EditProductModel()}
        </div>

    )
}

export default EntryForms