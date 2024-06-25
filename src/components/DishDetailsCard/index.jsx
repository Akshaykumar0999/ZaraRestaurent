import './index.css'

const DishDetailsCard = ({dishDetails, onClickSelectDish}) => {
    const {id, name, price, imageUrl} = dishDetails
    const onSelectdish = () => {
        onClickSelectDish(id)
    }
    return(
        <li className='Restro-dish-item-card' onClick={onSelectdish}>
            <img src={imageUrl} alt={id} className='dish-image' />
            <h1 className='dish-name'>{name}</h1>
            <p className='dish-price'>{price} <span className='price-text'>Rs</span></p>
        </li>
    )
}

export default DishDetailsCard