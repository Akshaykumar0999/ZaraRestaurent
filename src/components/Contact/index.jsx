import Navbar from '../Navbar'
import './index.css'
import { CiDollar } from "react-icons/ci";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Contact = () => {
    let showdate = new Date();
    let todaysDate = showdate.toUTCString();
    const currentDate = todaysDate.slice(0, 16)
    return (
        <div className='Home-main-container'>
            <div className='nav-bar'>
                <Navbar />
            </div>
            <div className='home-page-products-container'>
                <div className='home-page-headers-card'>
                    <div>
                        <h1 className='title-of-restro-name'>Dash Board</h1>
                        <p className='current-date'>{currentDate}</p>
                    </div>
                </div>
                <ul className='dashboard-revenue-cards'>
                    <li className='revenue-list-card'>
                        <div className='revenue-first-icons'>
                            <div className='revenue-icon-card'>
                                <CiDollar className='revenue-icon' />
                            </div>
                            <p className='revenue-first-icons-ratio'>
                                -32.40%
                                <FaRegArrowAltCircleUp />
                            </p>
                        </div>
                        <h3 className='revenue-amount-price'>$10,300.00</h3>
                        <p className='revenue-des'>Total Revenue</p>
                    </li>
                    <li className='revenue-list-card'>
                        <div className='revenue-first-icons'>
                            <div className='revenue-icon-card'>
                                <CiDollar className='revenue-icon' />
                            </div>
                            <p className='revenue-first-icons-ratio'>
                                -32.40%
                                <FaRegArrowAltCircleUp />
                            </p>
                        </div>
                        <h3 className='revenue-amount-price'>$10,300.00</h3>
                        <p className='revenue-des'>Total Revenue</p>
                    </li>
                    <li className='revenue-list-card'>
                        <div className='revenue-first-icons'>
                            <div className='revenue-icon-card'>
                                <CiDollar className='revenue-icon' />
                            </div>
                            <p className='revenue-first-icons-ratio'>
                                -32.40%
                                <FaRegArrowAltCircleUp />
                            </p>
                        </div>
                        <h3 className='revenue-amount-price'>$10,300.00</h3>
                        <p className='revenue-des'>Total Revenue</p>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Contact