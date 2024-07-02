/* eslint-disable react/jsx-key */
import Navbar from '../Navbar'
import { useEffect, useState, useRef } from 'react';
import './index.css'
import { BsBalloonHeart, BsExclamationCircle } from "react-icons/bs";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { TbCategoryPlus } from "react-icons/tb";
import {  IoIosPerson } from "react-icons/io";
import CategoryOption from '../CategoryOption';
import { BsFilter } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Modal from 'react-bootstrap/Modal';


const settingsList = [
    {
        id: 1,
        categorySettingName: 'Manage User',
        settingIcon: <IoIosPerson className='category-icon' />,
        description: 'Add, Edit Users',
    },
    {
        id: 2,
        categorySettingName: 'Product Maganagement',
        settingIcon: <TbCircleDashedPercentage className='category-icon' />,
        description: 'Manage Your Product,Pricing.,etc',
    },
    {
        id: 3,
        categorySettingName: 'Category Management',
        settingIcon: <BiCategory className='category-icon' />,
        description: 'Customize Your Categories',
    },
    {
        id: 4,
        categorySettingName: 'Sub-Category Management',
        settingIcon: <TbCategoryPlus className='category-icon' />,
        description: 'Customize Your SubCategories',
    },
    {
        id: 5,
        categorySettingName: 'Appearence',
        settingIcon: <BsBalloonHeart className='category-icon' />,
        description: 'Dark and Light mode, Font size',
    },
    {
        id: 6,
        categorySettingName: 'About',
        settingIcon: <BsExclamationCircle className='category-icon' />,
        description: 'Find Out more about posly',
    },
]

const EntryForms = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [categoryActId, setCategoryActId] = useState(settingsList[0].id)
    const [AllRestroDishesList, setAllRestroDishesList] = useState([])
    const [activeProduct, setActiveProduct] = useState({})

    const [showCategoryModel, setShowCatModle] = useState(false)
    const [showEditCatgeory, setShowEditCatgeory] = useState(false)
    const [activeCtegory, setActivecategory] = useState(0)

    const [showsubCategoryModel, setShowSubCatModle] = useState(false)
    const [showEditSubCatgeory, setShowEditSubCatgeory] = useState(false)
    const [activeSubCtegory, setActiveSubcategory] = useState(0)

    const formRef = useRef();
    const [lgShow, setLgShow] = useState(false);
    const [editShowModle, setEditShowModel] = useState(false)
    const changeCategory = (id) => {
        setCategoryActId(id)
    }

    // Get Category Type Fetching 
    useEffect(() => {
        if(showEditSubCatgeory==false && showsubCategoryModel==false){
            fetch("https://resbackend.gharxpert.in/getCategoryType", {
                method: "GET",
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }).then((data) => data.json()).then((res) => {
    
                setSubCategories(res.subcategories)
            })
                .catch((error) => { console.log(error) });
        }
    }, [showEditSubCatgeory,showsubCategoryModel])

    // Get Product API Fetching
    useEffect(() => {
        if(editShowModle==false && lgShow==false){
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
                    mrp:eachList.mrp,
                    discount:eachList.discount,
                    subCategoryId:eachList.subCategoryId,
                    quantity: 1,
                })
                ))
                setAllRestroDishesList(updatedList)
            })
                .catch((error) => { console.log(error) });
        }
    }, [editShowModle,lgShow])

    //Get Categories API = 
    useEffect(() => {
        if(showEditCatgeory==false && showCategoryModel==false){
            fetch("https://resbackend.gharxpert.in/getCategories", {
                method: "GET",
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }).then((data) => data.json()).then((res) => {
                const updatedTabList = res.categories.map((eachList =>
                ({
                    id: eachList.id,
                    name: eachList.name,
                    image: eachList.image,
                    createdAt: eachList.created_at,
                    updatedAt: eachList.updated_at,
                })
                ))
                setCategories(updatedTabList)
            })
                .catch((error) => { console.log(error) });
        }
    }, [showEditCatgeory,showCategoryModel])


    // on-Submit-Update-product-Data
    const onUpdateProductForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        try {
            const response = await fetch(`https://resbackend.gharxpert.in/updateProduct/${activeProduct.id}`, {
                method: 'PUT',
                headers: {
                    "Authorization": localStorage.getItem('token')
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }


            const result = await response.json();
            console.log('Success:', result);
            if(result.status){
                setEditShowModel(false);
            }
            setEditShowModel(false)
            alert(result.message);
            
            // editShowModle(false);
            // Handle success (e.g., show a message, update state/UI)
        } catch (error) {
            console.error('Error:', error);
        }



    }
    //Add Product Open Module form
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
                        <form className='product-form-card' ref={formRef} >
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
                            <button className='model-button-card' onClick={async(e)=>{
                                    e.preventDefault();
                                    const formData = new FormData(formRef.current);


                                    try {
                                        const response = await fetch(`https://resbackend.gharxpert.in/addProduct`, {
                                            method: 'POST',
                                            headers: {
                                                "Authorization": localStorage.getItem('token')
                                            },
                                            body: formData
                                        });
                            
                                        if (!response.ok) {
                                            throw new Error('Network response was not ok');
                                        }
                            
                            
                                        const result = await response.json();
                                        console.log('Success:', result);
                                        alert(result.message);
                                        // Handle success (e.g., show a message, update state/UI)
                                    } catch (error) {
                                        console.error('Error:', error);
                                    }
                                }} type='submit'>Enter Product</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
    //EditProduct POPUP Model form
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
                        <form className='product-form-card' ref={formRef} onSubmit={onUpdateProductForm} >
                            <div className='input-container' >
                                <label className='model-input-label' htmlFor='product-name'>Product Name</label>
                                <input className='model-input-card' name='name' type='text' defaultValue={activeProduct.name} placeholder='Products-Name' id='product-name' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Price'>Price</label>
                                <input className='model-input-card' name='price' type='number' defaultValue={activeProduct.price} placeholder='Products-Price' id='Price' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='MRP'>Product MRP</label>
                                <input className='model-input-card' name='mrp' defaultValue={activeProduct.mrp} type='number' placeholder='MRP' id='MRP' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Discount'>Discount</label>
                                <input className='model-input-card' name='discount' defaultValue={activeProduct.discount} type='number' placeholder='Discount' id='Discount' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='category-types'>Product Category Type</label>
                                <select className='model-selct-card'  name='subCategoryId' id='category-types' >
                                    {
                                        subCategories?.map((elem) => {
                                            return <option className='options-card' selected={elem.id==activeProduct.subCategoryId && 'selected'} key={elem.id} value={elem.id}>{elem.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='product-image'>Product Image</label>
                                <input name='image' type='file'  placeholder='Products-image' id='product-image' />
                            </div>
                            <button className='model-button-card' type='submit'>Enter Product</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
    //setting management of products like Add Product, Edit Product 
    const AddEditProductsManager = () => {
        return (
            <div className='manage-categories-main-card'>
                <div className="categories-manage-header">
                    <h3 className='order-name'>Product Management</h3>
                    <button className='filter-card'><BsFilter style={{ marginRight: '10px' }} />Manage Categories</button>
                </div>
                <ul className='manage-products-main-ul-card'>
                    <li className='add-product-card' onClick={() => setLgShow(true)}>
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
                            <button className='edit-button-card' onClick={() => (setEditShowModel(true), setActiveProduct(eachitem))}><MdEdit style={{ marginRight: '10px' }} />Edit Dish</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }


    // on-Submit-Update-Category-Data
    const onUpdateCatgeoryForm = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        try {
            const response = await fetch(`https://resbackend.gharxpert.in/updateCategory/${activeCtegory.id}`, {
                method: 'PUT',
                headers: {
                    "Authorization": localStorage.getItem('token')
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log('Success:', result);
            alert(result.message);
            // Handle success (e.g., show a message, update state/UI)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    //Add category model
    const AddCatagoryModel = () => {
        return (
            <Modal
                size="lg"
                show={showCategoryModel}
                onHide={() => setShowCatModle(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add Categeory
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='product-form-container'>
                        <form className='product-form-card' ref={formRef} >
                            <div className='input-container' >
                                <label className='model-input-label' htmlFor='product-name'>Category Name</label>
                                <input className='model-input-card' name='name' type='text' placeholder='Category-Name' id='product-name' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Category-image'>Category Image</label>
                                <input name='image' type='file' placeholder='Category-image' id='Category-image' />
                            </div>
                            <div className='w-100'>
                                <button className='model-button-card' onClick={async(e)=>{
                                    e.preventDefault();
                                    const formData = new FormData(formRef.current);


                                    try {
                                        const response = await fetch(`https://resbackend.gharxpert.in/addcategories`, {
                                            method: 'POST',
                                            headers: {
                                                "Authorization": localStorage.getItem('token')
                                            },
                                            body: formData
                                        });
                            
                                        if (!response.ok) {
                                            throw new Error('Network response was not ok');
                                        }
                            
                            
                                        const result = await response.json();
                                        console.log('Success:', result);
                                        alert(result.message);
                                        // Handle success (e.g., show a message, update state/UI)
                                    } catch (error) {
                                        console.error('Error:', error);
                                    }
                                }} type='submit'>Add Category</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
    //Edit Catgegory model
    const EditCatgeoryModel = () => {
        return (
            <Modal
                size="lg"
                show={showEditCatgeory}
                onHide={() => setShowEditCatgeory(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit Categeory
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='product-form-container'>
                        <form className='product-form-card' ref={formRef} onSubmit={onUpdateCatgeoryForm} >
                            <div className='input-container' >
                                <label className='model-input-label' htmlFor='product-name'>Category Name</label>
                                <input className='model-input-card' name='name' defaultValue={activeCtegory.name} type='text' placeholder='Category-Name' id='product-name' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Category-image'>Category Image</label>
                                <input name='image' type='file' placeholder='Category-image' id='Category-image' />
                            </div>
                            <div className='w-100'>
                                <button className='model-button-card' type='submit'>Edit Category</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
    //setting management of categories like Add Category, Edit Category 
    const AddEditCategoryManager = () => {
        return (
            <div className='manage-categories-main-card'>
                <div className="categories-manage-header">
                    <h3 className='order-name'>Catgeory Management</h3>
                    <button className='filter-card'><BsFilter style={{ marginRight: '10px' }} />Manage Categories</button>
                </div>
                <ul className='manage-products-main-ul-card'>
                    <li className='add-product-card' onClick={() => setShowCatModle(true)}>
                        <div className='add-product-sub-card'>
                            <FiPlus style={{ marginBottom: '15px' }} />
                            <p>Add Category</p>
                        </div>
                    </li>
                    {categories.map((eachitem) => (
                        <li className='edit-product-card'>
                            <div className='edit-catgeory-sub-card'>
                                <p style={{ color: "#ffffff" }}>Category-Name</p>
                                <p style={{ color: "#f28459" }}>{eachitem.name}</p>
                            </div>
                            <button className='edit-button-card' onClick={() => (setShowEditCatgeory(true), setActivecategory(eachitem))}><MdEdit style={{ marginRight: '10px' }} />Edit Category</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }


    // on-Submit-Update-Sub-Category-Data
    const onUpdateSubCatgeoryForm = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        try {
            const response = await fetch(`https://resbackend.gharxpert.in/updateSubcategory/${activeSubCtegory.id}`, {
                method: 'PUT',
                headers: {
                    "Authorization": localStorage.getItem('token')
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log('Success:', result);
            alert(result.message);
            // Handle success (e.g., show a message, update state/UI)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    //Add sub-category model form
    const AddSubCatagoryModel = () => {
        return (
            <Modal
                size="lg"
                show={showsubCategoryModel}
                onHide={() => setShowSubCatModle(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add Sub-Categeory
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='product-form-container'>
                        <form className='product-form-card' ref={formRef} >
                            <div className='input-container' >
                                <label className='model-input-label' htmlFor='product-name'>Sub-Category Name</label>
                                <input className='model-input-card' name='name' type='text' placeholder='Category-Name' id='product-name' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Category-image'>Sub-Category Image</label>
                                <input name='image' type='file' placeholder='Category-image' id='Category-image' />
                            </div>
                            <div className='w-100'>
                                <button className='model-button-card' onClick={async(e)=>{
                                    e.preventDefault();
                                    const formData = new FormData(formRef.current);


                                    try {
                                        const response = await fetch(`https://resbackend.gharxpert.in/addSubcategory`, {
                                            method: 'POST',
                                            headers: {
                                                "Authorization": localStorage.getItem('token')
                                            },
                                            body: formData
                                        });
                            
                                        if (!response.ok) {
                                            throw new Error('Network response was not ok');
                                        }
                            
                            
                                        const result = await response.json();
                                        console.log('Success:', result);
                                        alert(result.message);
                                        // Handle success (e.g., show a message, update state/UI)
                                    } catch (error) {
                                        console.error('Error:', error);
                                    }
                                }} type='submit'>Add Sub-Category</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
    //Edit Sub-Catgegory model
    const EditSubCatgeoryModel = () => {
        return (
            <Modal
                size="lg"
                show={showEditSubCatgeory}
                onHide={() => setShowEditSubCatgeory(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit Sub-Categeory
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='product-form-container'>
                        <form className='product-form-card' ref={formRef} onSubmit={onUpdateSubCatgeoryForm} >
                            <div className='input-container' >
                                <label className='model-input-label' htmlFor='subproduct-name'>Sub-Category Name</label>
                                <input className='model-input-card' name='name' defaultValue={activeSubCtegory.name} type='text' placeholder='Category-Name' id='subproduct-name' />
                            </div>
                            <div className='input-container'>
                                <label className='model-input-label' htmlFor='Category-image'>Sub-Category Image</label>
                                <input name='image' type='file' placeholder='Category-image' id='Category-image' />
                            </div>
                            <div className='w-100'>
                                <button className='model-button-card' type='submit'>Edit SubCategory</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
    //setting management of Sub-categories like Add SubCategory, Edit SubCategory 
    const AddEditSubCategoryManager = () => {
        return (
            <div className='manage-categories-main-card'>
                <div className="categories-manage-header">
                    <h3 className='order-name'>Sub-Catgeory Management</h3>
                    <button className='filter-card'><BsFilter style={{ marginRight: '10px' }} />Manage Sub-Categories</button>
                </div>
                <ul className='manage-products-main-ul-card'>
                    <li className='add-product-card' onClick={() => setShowSubCatModle(true)}>
                        <div className='add-product-sub-card'>
                            <FiPlus style={{ marginBottom: '15px' }} />
                            <p>Add SubCategory</p>
                        </div>
                    </li>
                    {subCategories.map((eachitem) => (
                        // eslint-disable-next-line react/jsx-key
                        <li className='edit-product-card'>
                            <div className='edit-catgeory-sub-card'>
                                <p style={{ color: "#ffffff" }}>SubCategory Name</p>
                                <p style={{ color: "#f28459" }}>{eachitem.name}</p>
                            </div>
                            <button className='edit-button-card' onClick={() => (setShowEditSubCatgeory(true), setActiveSubcategory(eachitem))}><MdEdit style={{ marginRight: '10px' }} />Edit SubCategory</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }


    const UsersManager = () => {
        return (
            <div className='manage-categories-main-card'>
                <div className="categories-manage-header">
                    <h3 className='order-name'>Manage User</h3>
                    <button className='filter-card'><BsFilter style={{ marginRight: '10px' }} />Manage User</button>
                </div>
                <form className='users-main-card' ref={formRef}>
                    <div className='users-username-card'>
                        <label className='user-name-label'>User Name</label>
                        <input className='user-name-input-card' name='name' type='text' placeholder='User Name' />
                    </div>
                    <div className='users-username-card'>
                        <label className='user-name-label'>User Mobile No</label>
                        <input className='user-name-input-card' type='number'  name='phone' placeholder='Mobile No' />
                    </div>
                    <div className='users-username-card'>
                        <label className='user-name-label'>User Emial</label>
                        <input className='user-name-input-card' type='email' name='email' placeholder='User Eamil' />
                    </div>
                    <div className='users-username-card'>
                        <label className='user-name-label'>User Password</label>
                        <input className='user-name-input-card' type='password' name='password' placeholder='Password' />
                    </div>
                    <div className='users-username-card'>
                        <label className='user-name-label'>Select User Role</label>
                        <select name="roleId" className='user-name-input-card'  id="">
                            <option value="1">cashier</option>
                            <option value="2">waiter</option>
                        </select>
                    </div>
                    <div className='users-username-card'>
                        <label className='user-name-label'>Profile Image</label>
                        <input className='user-name-input-card' type='file' name='image' placeholder='Profile Image' />
                    </div>
                    <div className='w-100'>
                        <button type='submit' onClick={async(e)=>{
                            e.preventDefault();
                            const formData=new FormData(formRef.current);
                            const response=await fetch(`https://resbackend.gharxpert.in/register`,{
                                method:"POST",
                                headers: {
                                    "Authorization": localStorage.getItem('token'),

                                },
                                body: formData
                            });
                            const res=await response.json();
                            console.log(res)
                            if(res.success){
                                alert(res.message)
                            }
                            alert(res.message);
                        }} className='model-button-card' >Add User</button>
                    </div>
                </form>
            </div>
        )
    }



    const AllManagementControlls = () => {
        switch (categoryActId) {
            case 1:
                return UsersManager();
            case 2:
                return AddEditProductsManager();
            case 3:
                return AddEditCategoryManager();
            case 4:
                return AddEditSubCategoryManager();
            
            default:
                return (<div className='manage-categories-main-card'>
                    <h1 style={{ color: '#ffffff', marginTop: '25%', alignSelf: 'center', fontSize: '20px' }}>This page is cuurrntly not Available</h1>
                </div>);
        }
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
                            {AllManagementControlls()}
                        </div>
                    </div>
                </div>
            </div>
            {AddProductModel()}
            {EditProductModel()}
            {AddCatagoryModel()}
            {EditCatgeoryModel()}
            {AddSubCatagoryModel()}
            {EditSubCatgeoryModel()}
        </div>

    )
}

export default EntryForms