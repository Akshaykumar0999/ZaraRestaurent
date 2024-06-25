import  './index.css'

const FormsTabItem = ({tabDetails, updateFormActTab, formActTabStyle}) => {
    const {id, tabName} = tabDetails
    const onClickActiveTab = () => {
        updateFormActTab(id)
    }
    const activeStyles =  formActTabStyle && 'form-active-tab-item'
    return(
        <li className={`form-tab-list ${activeStyles}`} onClick={onClickActiveTab}>{tabName}</li>
    )
}

export default FormsTabItem