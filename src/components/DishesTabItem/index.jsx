import './index.css'

const DishesTabItem = ({dishDetails, isActive, onClickActiveTab}) => {
    const {categoryName, id} = dishDetails
    const ActivetabStyle = isActive && 'activeTabCls'
    const onClickTab = () => {
        onClickActiveTab(id)
    } 
    return(
        <li className={`tabItem ${ActivetabStyle}`} onClick={onClickTab}>
            {categoryName}
        </li>
    )
}

export default DishesTabItem