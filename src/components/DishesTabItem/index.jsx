import './index.css'

const DishesTabItem = ({dishDetails, isActive, onClickActiveTab}) => {
    const {TabName, TabId} = dishDetails
    const ActivetabStyle = isActive && 'activeTabCls'
    const onClickTab = () => {
        onClickActiveTab(TabId)
    } 
    return(
        <li className={`tabItem ${ActivetabStyle}`} onClick={onClickTab}>
            {TabName}
        </li>
    )
}

export default DishesTabItem