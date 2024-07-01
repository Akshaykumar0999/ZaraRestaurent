import Navbar from '../Navbar'
import './index.css'
import FormsTabItem from '../FormsTabItem'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const AllEntryFormTabsList = [
    {
        id: 2,
        tabName: 'New Category',
        tabCategory: 'TABTWO',
        endPoint: "/addcategories"
    },
    {
        id: 3,
        tabName: 'New Subcategory',
        tabCategory: 'TABTHREE',
        endPoint: "/addSubcategory"
    },
    {
        id: 1,
        tabName: 'New Product',
        tabCategory: 'NEWPRODUCT',
        endPoint: "/addProduct"
    }, {
        id: 4,
        tabName: 'New Table',
        tabCategory: 'OTHERS',
    },
]

const AllForms = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
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
                name: eachList.name,
                image: eachList.image,
                createdAt: eachList.created_at,
                updatedAt: eachList.updated_at,
            })
            ))
            setCategories(updatedTabList)
        })
            .catch((error) => { console.log(error) });
    }, [])
    useEffect(() => {
        fetch("https://resbackend.gharxpert.in/getCategoryType", {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        }).then((data) => data.json()).then((res) => {

            setSubCategories(res.subcategories)
        })
            .catch((error) => { console.log(error) });
    }, [])
    const [formActTab, setFormActTab] = useState(AllEntryFormTabsList[0])
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState(0)
    const [Mrp, setMrp] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)
    const formRef = useRef();
    const updateFormActTab = (tab) => {
        setFormActTab(tab)
    }
    const changeProductName = (e) => {
        setProductName(e.target.value)
    }
    const changePrice = (e) => {
        setPrice(e.target.value)
    }
    const changeMrp = (e) => {
        setMrp(e.target.value)
    }
    const changeDiscount = (e) => {
        setDiscount(e.target.value)
    }
    const changeCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const onSubmitProductForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);


        try {
            const response = await fetch(`https://resbackend.gharxpert.in/${formActTab.endPoint}`, {
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


        // event.preventDefault()
        // const newProductObject = {
        //     id: uuidv4(),
        //     name: productName,
        //     imageUrl: image,
        //     price: price,
        // }
        // const url = 'https://resbackend.gharxpert.in/getProducts'
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify(newProductObject),
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Authorization" : localStorage.getItem('token')
        //     }
        // }
        // fetch(url, options).then(response => {console.log(response)}).catch(error => console.log(error))
    }

    // useEffect(() => {
    //     onSubmitProductForm()
    // }, [])
    return (
        <div className='Home-main-container'>
            <div className='nav-bar'>
                <Navbar />
            </div>
            <div className='all-entry-forms-container'>
                <h1 className='all-froms-header-name'>All Entry Forms</h1>
                <ul className='all-forms-tabs-ul-card'>
                    {
                        AllEntryFormTabsList.map((eachtab) => (
                            <FormsTabItem tabDetails={eachtab} key={eachtab.id} updateFormActTab={() => updateFormActTab(eachtab)} formActTabStyle={eachtab.id === formActTab.id} />
                        ))
                    }
                </ul>
                {
                    formActTab.id == 1 &&
                    <div className='product-form-container'>
                        <form className='product-form-card' ref={formRef} onSubmit={onSubmitProductForm}>
                            <div className='input-container' onChange={changeProductName}>
                                <label className='input-label-card' htmlFor='product-name'>Product Name</label>
                                <input className='input-card' name='name' type='text' placeholder='Products-Name' id='product-name' />
                            </div>
                            <div className='input-container' onChange={changePrice}>
                                <label className='input-label-card' htmlFor='Price'>Price</label>
                                <input className='input-card' name='price' type='number' placeholder='Products-Price' id='Price' />
                            </div>
                            <div className='input-container'>
                                <label className='input-label-card' htmlFor='MRP' onChange={changeMrp}>Product MRP</label>
                                <input className='input-card' name='mrp' type='number' placeholder='MRP' id='MRP' />
                            </div>
                            <div className='input-container'>
                                <label className='input-label-card' htmlFor='Discount' onChange={changeDiscount}>Discount</label>
                                <input className='input-card' name='discount' type='number' placeholder='Discount' id='Discount' />
                            </div>
                            <div className='input-container'>
                                <label className='input-label-card' htmlFor='category-types'>Product Category Type</label>
                                <select className='select-input-card' name='subCategoryid' id='category-types' value={category} onChange={changeCategory}>

                                    {
                                        subCategories?.map((elem) => {
                                            return <option className='options-card' key={elem.id} value={elem.id}>{elem.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='input-container'>
                                <label className='input-label-card' htmlFor='product-image'>Product Image</label>
                                <input className='input-card' name='image' style={{ padding: 0 }} accept='image/*' type='file' placeholder='Products-image' id='product-image' onChange={handleImageChange} />
                            </div>
                            <button className='enter-product-button' type='submit'>Enter Product</button>
                        </form>
                    </div>
                }

                {
                    formActTab.id == 2 &&
                    <div className='product-form-container'>
                        <form className='product-form-card' ref={formRef} onSubmit={onSubmitProductForm}>
                            <div className='input-container' onChange={changeProductName}>
                                <label className='input-label-card' htmlFor='product-name'>Category Name</label>
                                <input className='input-card' name='name' type='text' placeholder='Products-Name' id='product-name' />
                            </div>

                            <div className='input-container'>
                                <label className='input-label-card' htmlFor='product-image'>Category Image</label>
                                <input className='input-card' name='image' style={{ padding: 0 }} accept='image/*' type='file' placeholder='Products-image' id='product-image' onChange={handleImageChange} />
                            </div>
                            <button className='enter-product-button' type='submit'>Enter Category</button>
                        </form>
                    </div>
                }

                {
                    formActTab.id == 3 &&
                    <div className='product-form-container'>
                        <form className='product-form-card' ref={formRef} onSubmit={onSubmitProductForm}>
                            <div className='input-container' onChange={changeProductName}>
                                <label className='input-label-card' htmlFor='product-name'>Category Name</label>
                                <input className='input-card' name='name' type='text' placeholder='Sub Cat Name' id='product-name' />
                            </div>

                            <div className='input-container' onChange={changeProductName}>
                                <label className='input-label-card' htmlFor='product-name'>Category Name</label>
                                <select className='select-input-card' name="categoryId" id="">

                                    {
                                        categories?.map((elem) => {

                                            return <option key={elem.id} value={elem.id}>{elem.name}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className='input-container'>
                                <label className='input-label-card' htmlFor='product-image'>Category Image</label>
                                <input className='input-card' style={{ padding: 0 }} name='image' accept='image/*' type='file' placeholder='Products-image' id='product-image' onChange={handleImageChange} />
                            </div>
                            <button className='enter-product-button' type='submit'>Enter Sub Category</button>
                        </form>
                    </div>
                }

            </div>
        </div>
    )
}

export default AllForms