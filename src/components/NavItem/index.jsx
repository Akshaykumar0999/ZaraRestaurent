import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/AuthSlice'
import './index.css'
import { NavLink } from 'react-router-dom'

const NavItem = ( {details, updateActiveNavId} ) => {
    const {navIcon, toLink, id} = details

    const dispatch=useDispatch();
    const onClickActiveNav = () => {
        updateActiveNavId(id)
    }
<<<<<<< HEAD
  
    return(
        <NavLink style={({ isActive }) => ({backgroundColor: isActive ? "#e78862" : "", color: isActive ? "#ffffff" : ""})} className='nav-li-icon-card'  to={toLink} >
            <li className='nav-Icon'  onClick={onClickActiveNav}>
=======
    const activeNavIdClass = isActivNavId && 'active-nav-id-item'
    
        if(toLink=='/login'){
            return <NavLink className='nav-li-icon-card'  onClick={()=>{
                    dispatch(logoutUser());
                        
            }}  >
            <li className={`navicon ${activeNavIdClass}`} onClick={onClickActiveNav}>
>>>>>>> origin/main
                {navIcon}
            </li> 
        </NavLink>
        }else{
           return  <NavLink className='nav-li-icon-card'  to={toLink} >
            <li className={`navicon ${activeNavIdClass}`} onClick={onClickActiveNav}>
                {navIcon}
            </li> 
        </NavLink>
        }
    
}

export default NavItem