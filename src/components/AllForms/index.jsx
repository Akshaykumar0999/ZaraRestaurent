import Navbar from '../Navbar'
import './index.css'
import FormsTabItem from '../FormsTabItem'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const AllEntryFormTabsList = [
    {
        id: 1,
        tabName : 'New Product',
        tabCategory : 'NEWPRODUCT',
    },{
        id: 2,
        tabName : 'Tab 2',
        tabCategory : 'TABTWO',
    },{
        id: 3,
        tabName : 'Tab 3',
        tabCategory : 'TABTHREE',
    },{
        id: 4,
        tabName : 'Others',
        tabCategory : 'OTHERS',
    },
]
const AllForms = () => {
    const [formActTab, setFormActTab] = useState(AllEntryFormTabsList[0].id)
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState(0)
    const [Mrp, setMrp] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)
    const updateFormActTab = (id) => {
        setFormActTab(id)
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
    //     const formData = {
    //         id: uuidv4(),
    //         name: productName,
    //         imageUrl: image,
    //         price: price,
    //     }

    // try {
    //   const response = await fetch('https://resbackend.gharxpert.in/getProducts', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       "Authorization" : localStorage.getItem('token')
    //     },
    //     body: JSON.stringify(formData)
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const result = await response.json();
    //   console.log('Success:', result);
    //   // Handle success (e.g., show a message, update state/UI)
    // } catch (error) {
    //   console.error('Error:', error);
    // }

    
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
                            <FormsTabItem tabDetails={eachtab} key={eachtab.id} updateFormActTab={updateFormActTab} formActTabStyle= {eachtab.id === formActTab} />
                        )) 
                    }
                </ul>
                <div className='product-form-container'>
                    <form className='product-form-card' onSubmit={onSubmitProductForm}>
                        <div className='input-container' onChange={changeProductName}>
                            <label className='input-label-card' htmlFor='product-name'>Product Name</label>
                            <input className='input-card' type='text' placeholder='Products-Name' id='product-name' />
                        </div>
                        <div className='input-container' onChange={changePrice}>
                            <label className='input-label-card' htmlFor='Price'>Price</label>
                            <input className='input-card' type='number' placeholder='Products-Price' id='Price' />
                        </div>
                        <div className='input-container'>
                            <label className='input-label-card' htmlFor='MRP' onChange={changeMrp}>Product MRP</label>
                            <input className='input-card' type='number' placeholder='MRP' id='MRP' />
                        </div>
                        <div className='input-container'>
                            <label className='input-label-card' htmlFor='Discount' onChange={changeDiscount}>Discount</label>
                            <input className='input-card' type='number' placeholder='Discount' id='Discount' />
                        </div>
                        <div className='input-container'>
                            <label className='input-label-card' htmlFor='category-types'>Product Category Type</label>
                            <select className='select-input-card' id='category-types' value={category} onChange={changeCategory}>
                                <option className='options-card'>Chiken Dishes</option>
                                <option className='options-card'>Mutton Dishes</option>
                                <option className='options-card'>Fish Dishes</option>
                                <option className='options-card'>Cold Drinks</option>
                            </select>
                        </div>
                        <div className='input-container'>
                            <label className='input-label-card' htmlFor='product-image'>Product Image</label>
                            <input className='input-card' type='file' placeholder='Products-image' id='product-image' onChange={handleImageChange} />
                        </div>
                        <button className='enter-product-button' type='submit'>Enter Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AllForms