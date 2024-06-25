import './index.css'
import { NavLink } from 'react-router-dom'

const NavItem = ({details, updateActiveNavId, isActivNavId}) => {
    const {navIcon, toLink, id} = details
    const onClickActiveNav = () => {
        updateActiveNavId(id)
    }
    const activeNavIdClass = isActivNavId && 'active-nav-id-item'
    return(
        <NavLink className='nav-li-icon-card'  to={toLink} >
            <li className={`navicon ${activeNavIdClass}`} onClick={onClickActiveNav}>
                {navIcon}
            </li> 
        </NavLink>
    )
}

export default NavItem