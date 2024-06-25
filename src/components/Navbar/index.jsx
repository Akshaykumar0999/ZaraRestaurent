import './index.css'
import { GoHome } from "react-icons/go";
import { LuBadgePercent } from "react-icons/lu";
import { VscPieChart } from "react-icons/vsc";
import { TbMail } from "react-icons/tb";
import { MdNotificationsNone, MdOutlineSettings, MdLogout } from "react-icons/md";

import NavItem from '../NavItem';
import { useState } from 'react';


const NavDetailsList = [
    {
        id: 1,
        navIcon: <GoHome />,
        toLink: '/',
    },{
        id: 2,
        navIcon: <LuBadgePercent />,
        toLink: '/allFroms',
    },{
        id: 3,
        navIcon: <VscPieChart />,
        toLink: '/dashboard',
    },{
        id: 4,
        navIcon: <MdNotificationsNone />,
        toLink: '/',
    },{
        id: 5,
        navIcon: <MdOutlineSettings />,
        toLink: '/',
    },{
        id: 6,
        navIcon: <TbMail />,
        toLink: '/',
    },{
        id: 7,
        navIcon: <MdLogout />,
        toLink: '/login',
    }
]

const Navbar = () => {
    const [activeNavId, setActiveNavId] = useState(NavDetailsList[0].id)
    const updateActiveNavId = (id) => {
        setActiveNavId(id)
    }
    return (
        <div className='nav-bar-container'>
            <img src='/images/restaurent-logo.jpeg' className='website-logo' />
            <ul className='nav-ul-container'>
                {NavDetailsList.map((item) => (
                    <NavItem details={item}  key={item.id} updateActiveNavId={updateActiveNavId} isActivNavId={item.id === activeNavId} />
                ))}
            </ul>
        </div>
    )
}

export default Navbar