import './index.css'
import { NavLink } from 'react-router-dom'

const NavItem = ( {details, updateActiveNavId} ) => {
    const {navIcon, toLink, id} = details
    const onClickActiveNav = () => {
        updateActiveNavId(id)
    }
  
    return(
        <NavLink style={({ isActive }) => ({backgroundColor: isActive ? "#e78862" : "", color: isActive ? "#ffffff" : ""})} className='nav-li-icon-card'  to={toLink} >
            <li className='nav-Icon'  onClick={onClickActiveNav}>
                {navIcon}
            </li> 
        </NavLink>
    )
}

export default NavItem