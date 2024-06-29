import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/AuthSlice'
import './index.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const NavItem = ( {details, updateActiveNavId,isActive} ) => {
    const {navIcon, toLink, id} = details
    
    const dispatch=useDispatch();
    const onClickActiveNav = () => {
        updateActiveNavId(id)
    }
    const activeNavIdClass = isActive && 'active-nav-id-item'
    
        if(toLink=='/login'){
            return <NavLink className='nav-li-icon-card' style={({ isActive }) => ({backgroundColor: isActive ? "#e78862" : "", color: isActive ? "#ffffff" : ""})}  onClick={()=>{
                    dispatch(logoutUser());
                        
            }}  >
            <li className={`navicon ${activeNavIdClass}`} onClick={onClickActiveNav}>
                {navIcon}
            </li> 
        </NavLink>
        }else{
           return  <NavLink className='nav-li-icon-card' style={({ isActive }) => ({backgroundColor: isActive ? "#e78862" : "", color: isActive ? "#ffffff" : ""})}  to={toLink} >
            <li className={`navicon ${activeNavIdClass}`} onClick={onClickActiveNav}>
                {navIcon}
            </li> 
        </NavLink>
        }
    
}

export default NavItem