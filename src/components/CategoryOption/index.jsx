import './index.css'

const CategoryOption = ({optionDetails, changeCategory, isCategoryActive}) => {
    const {id, categorySettingName, settingIcon, description} = optionDetails
    const onClickChangeCategory = () => {
        changeCategory(id)
    }
    const activeStyle = isCategoryActive && 'active-li-styles'
    const activeColors = isCategoryActive && 'active-category-name'
    return(
        <li className={`${activeStyle} entry-forms-category-card`} onClick={onClickChangeCategory}>
            <div className={`category-icon-card ${activeColors}`}>
            {settingIcon}
            </div>
            <div className='entry-category-details'>
                <h3 className={`manage-category-name ${activeColors}`}>{categorySettingName}</h3>
                <p className='manage-category-des'>{description}</p>
            </div>
        </li>
    )
}

export default CategoryOption