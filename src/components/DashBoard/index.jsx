import Navbar from '../Navbar'
import './index.css'
import { CiDollar } from "react-icons/ci";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTag } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiMenuSearchLine } from "react-icons/ri";
// import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { FaSquare } from "react-icons/fa";




const RevenueList = [
    {
        id: 1,
        amount: '$10,480',
        fisrtIcon: <CiDollar className='revenue-icon' />,
        secondIcon: <FaRegArrowAltCircleUp />,
        description: 'Total Revenue',
        revenue: '+32.40%'
    },
    {
        id: 2,
        amount: '23,456',
        fisrtIcon: <FaTag className='revenue-icon' />,
        secondIcon: <FaRegArrowAltCircleDown />,
        description: 'Total Dish Ordered',
        revenue: '-12.46%'
    }, {
        id: 3,
        amount: '10,480.00',
        fisrtIcon: <IoPersonSharp className='revenue-icon' />,
        secondIcon: <FaRegArrowAltCircleUp />,
        description: 'Total Customers',
        revenue: '+2.40%'
    },
]

const tableOrdersLIst = [
    {
        id: '1',
        customer: 'Jenny',
        Image: 'http://www.myherodesign.com/wp-content/uploads/2016/06/Hispanic_Female_Suspicious-1.gif',
        menu: 'chiken Spicy wings (2 plates)',
        status: 'Completed',
        totalPayment: '$125'
    },
    {
        id: '2',
        customer: 'lara',
        Image: 'https://tse1.mm.bing.net/th?id=OIP.mlfObRKCDO4pgollystiHgHaIY&pid=Api&P=0&h=180',
        menu: 'Fish curry (1 plates)',
        status: 'Pending',
        totalPayment: '$15'
    },
    {
        id: '3',
        customer: 'Messi',
        Image: 'https://img.favpng.com/22/3/23/animated-film-cheek-computer-animation-facial-expression-cartoon-png-favpng-jQX8u9tzFnDdLM1XhuMUSFSnT.jpg',
        menu: 'mutton Soups (2 plates)',
        status: 'Preparing',
        totalPayment: '$25'
    }, {
        id: '4',
        customer: 'Jenny',
        Image: 'http://www.myherodesign.com/wp-content/uploads/2016/06/Hispanic_Female_Suspicious-1.gif',
        menu: 'chiken Spicy wings (2 plates)',
        status: 'Completed',
        totalPayment: '$125'
    },
    {
        id: '5',
        customer: 'lara',
        Image: 'https://tse1.mm.bing.net/th?id=OIP.mlfObRKCDO4pgollystiHgHaIY&pid=Api&P=0&h=180',
        menu: 'Fish curry (1 plates)',
        status: 'Pending',
        totalPayment: '$15'
    },
    {
        id: '6',
        customer: 'Messi',
        Image: 'http://www.myherodesign.com/wp-content/uploads/2016/06/Hispanic_Female_Suspicious-1.gif',

        menu: 'mutton Soups (2 plates)',
        status: 'Preparing',
        totalPayment: '$25'
    },
    {
        id: '7',
        customer: 'Dhoni',
        Image: 'https://img.favpng.com/22/3/23/animated-film-cheek-computer-animation-facial-expression-cartoon-png-favpng-jQX8u9tzFnDdLM1XhuMUSFSnT.jpg',
        menu: 'chiken Spicy wings (2 plates)',
        status: 'Completed',
        totalPayment: '$125'
    },
    {
        id: '8',
        customer: 'Rishab',
        Image: 'https://tse1.mm.bing.net/th?id=OIP.mlfObRKCDO4pgollystiHgHaIY&pid=Api&P=0&h=180',
        menu: 'Fish curry (1 plates)',
        status: 'Pending',
        totalPayment: '$15'
    },
    {
        id: '9',
        customer: 'Kohli',
        Image: 'https://img.favpng.com/22/3/23/animated-film-cheek-computer-animation-facial-expression-cartoon-png-favpng-jQX8u9tzFnDdLM1XhuMUSFSnT.jpg',
        menu: 'mutton Soups (2 plates)',
        status: 'Preparing',
        totalPayment: '$25'
    },
]

const mostOrderedList = [
    {
        id: 0,
        image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg',
        name: 'ChikenCurry Special',
        numberOfOrders: '200 Dishes Ordered'
    },
    {
        id: 1,
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2016/02/Slow-cooked-spicy-chicken-square.jpg',
        name: 'MuttonCurry Special',
        numberOfOrders: '170 Dishes Ordered'
    },
    {
        id: 2,
        image: 'https://production-media.gousto.co.uk/cms/mood-image/1995---Mild-Chicken-Curry-4258-1576753952570.jpg',
        name: 'FishCurry Special',
        numberOfOrders: '100 Dishes Ordered'
    }
]
const DashBoard = () => {
    let showdate = new Date();
    let todaysDate = showdate.toUTCString();
    const currentDate = todaysDate.slice(0, 16)
    const customerStatus = (status) => {
        if (status === 'Completed') {
            return <p className='completed'>{status}</p>
        } else if (status === "Pending") {
            return <p className='pending'>{status}</p>
        } else {
            return <p className='preparing'>{status}</p>
        }
    }

    const data = [
        { name: 'Dine In', value: 400 },
        { name: 'Parcel', value: 300 },
        { name: 'Delivery', value: 300 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className='Home-main-container'>
            <div className='nav-bar'>
                <Navbar />
            </div>
            <div className='dashboard-home-main-conteiner'>
                <div className='dashboard-first-container'>
                    <div className='dashboard-headers-card'>
                        <div>
                            <h1 className='title-of-restro-name'>Dash Board</h1>
                            <p className='current-date'>{currentDate}</p>
                        </div>
                    </div>
                    <ul className='dashboard-revenue-cards'>
                        {RevenueList.map((eachCard) =>
                            <li className='revenue-list-card' key={eachCard.id}>
                                <div className='revenue-first-icons'>
                                    <div className='revenue-icon-card'>
                                        {eachCard.fisrtIcon}
                                    </div>
                                    <p className='revenue-first-icons-ratio'>
                                        {eachCard.revenue}{eachCard.secondIcon}
                                    </p>
                                </div>
                                <h3 className='revenue-amount-price'>{eachCard.amount}</h3>
                                <p className='revenue-des'>{eachCard.description}</p>
                            </li>
                        )}
                    </ul>
                    <div className='dashboard-order-report-card'>
                        <div className='oredr-report-header'>
                            <h3 className='order-name'>Order Report</h3>
                            <div className='filter-card'>
                                <RiMenuSearchLine style={{ 'marginRight': '10px' }} />
                                Filter Orders
                            </div>
                        </div>
                        <table className='dashboard-table-main'>
                            <thead className='dash-b-table-head'>
                                <th className='th-name-card'>Customer</th>
                                <th className='th-name-card'>Menu</th>
                                <th className='th-name-card'>TotalPayment</th>
                                <th className='th-name-card'>Status</th>
                            </thead>
                            <tbody className='table-rows-card'>
                                {
                                    tableOrdersLIst.map(each => (
                                        <tr className='dash-b-table-row'>
                                            <td className='tr-name-card'>
                                                <img src={each.Image} className='table-customer-image' />
                                                {each.customer}</td>
                                            <td className='tr-name-card'>{each.menu}</td>
                                            <td className='tr-name-card'>{each.totalPayment}</td>
                                            <td className='tr-name-card'>
                                                {customerStatus(each.status)}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='dashboard-second-container'>
                    <div className='most-ordered-container'>
                        <div className='oredr-report-header'>
                            <h3 className='order-name'>Most ordered</h3>
                            <select className='most-ordered-select'>
                                <option>Today</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <ul className='mostordered-ul-list'>
                            {
                                mostOrderedList.map((eachDish) => (
                                    <li className='most-ordered-list-item'>
                                        <img src={eachDish.image} className='most-ordered-dish-image-ele' />
                                        <div className='details-of-ordered-item'>
                                            <h4 className='most-ordered-item-name'>{eachDish.name}</h4>
                                            <p className='most-ordered-item-des'>{eachDish.numberOfOrders}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='most-ordered-bottom'>
                            <button className='view-all-orders'>View All</button>
                        </div>
                    </div>
                    <div className='most-ordered-container'>
                        <div className='oredr-report-header'>
                            <h3 className='order-name'>Most Type Of Orders</h3>
                            <select className='most-ordered-select'>
                                <option>Today</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className='peichart-card'>
                            <PieChart width={300} height={200}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                            <div className='colors-names'>
                                <p className='pieschart-names'><FaSquare style={{ color: '#0088FE', height: '10px', width: '10px', marginRight: '10px' }} />{data[0].name}</p>
                                <p className='pieschart-names'><FaSquare style={{ color: '#00C49F', height: '10px', width: '10px', marginRight: '10px' }} />{data[1].name}</p>
                                <p className='pieschart-names'><FaSquare style={{ color: '#FFBB28', height: '10px', width: '10px', marginRight: '10px' }} />{data[2].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard