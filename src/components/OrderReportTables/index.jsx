import './index.css'
import Navbar from '../Navbar'
import { LuFileSearch2 } from "react-icons/lu";

const orderReportsLIst = [
    {
        id: 1,
        WaiterName: 'Jenny',
        orederId: 'A1',
        table: 3,
        imageUrl: 'http://www.myherodesign.com/wp-content/uploads/2016/06/Hispanic_Female_Suspicious-1.gif',
        OrederMenu: 'chiken Spicy wings (2 plates)',
        status: 'Completed',
        payment: '$125'
    },
    {
        id: 2,
        WaiterName: 'lara',
        orederId: 'A2',
        table: 4,
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.mlfObRKCDO4pgollystiHgHaIY&pid=Api&P=0&h=180',
        OrederMenu: 'Fish curry (1 plates)',
        status: 'Pending',
        payment: '$15'
    },
    {
        id: 3,
        WaiterName: 'Messi',
        orederId: 'A3',
        table: 10,
        imageUrl: 'https://img.favpng.com/22/3/23/animated-film-cheek-computer-animation-facial-expression-cartoon-png-favpng-jQX8u9tzFnDdLM1XhuMUSFSnT.jpg',
        OrederMenu: 'mutton Soups (2 plates)',
        status: 'Preparing',
        payment: '$25'
    }, 
    {
        id: 4,
        WaiterName: 'Jenny',
        orederId: 'A4',
        table: 1,
        imageUrl: 'http://www.myherodesign.com/wp-content/uploads/2016/06/Hispanic_Female_Suspicious-1.gif',
        OrederMenu: 'chiken Spicy wings (2 plates)',
        status: 'Completed',
        payment: '$125'
    },
    {
        id: 5,
        WaiterName: 'lara',
        orederId: 'A5',
        table: 4,
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.mlfObRKCDO4pgollystiHgHaIY&pid=Api&P=0&h=180',
        OrederMenu: 'Fish curry (1 plates)',
        status: 'Pending',
        payment: '$15'
    },
    {
        id: 6,
        WaiterName: 'Messi',
        orederId: 'A6',
        table: 8,
        imageUrl: 'http://www.myherodesign.com/wp-content/uploads/2016/06/Hispanic_Female_Suspicious-1.gif',
        OrederMenu: 'mutton Soups (2 plates)',
        status: 'Preparing',
        payment: '$25'
    },
    {
        id: 7,
        WaiterName: 'Dhoni',
        orederId: 'A7',
        table: 9,
        imageUrl: 'https://img.favpng.com/22/3/23/animated-film-cheek-computer-animation-facial-expression-cartoon-png-favpng-jQX8u9tzFnDdLM1XhuMUSFSnT.jpg',
        OrederMenu: 'chiken Spicy wings (2 plates)',
        status: 'Completed',
        payment: '$125'
    },
    {
        id: 8,
        WaiterName: 'Rishab',
        orederId: 'A8',
        table: 7,
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.mlfObRKCDO4pgollystiHgHaIY&pid=Api&P=0&h=180',
        OrederMenu: 'Fish curry (1 plates)',
        status: 'Pending',
        payment: '$15'
    },
    {
        id: 9,
        WaiterName: 'Kohli',
        orederId: 'A9',
        table: 7,
        imageUrl: 'https://img.favpng.com/22/3/23/animated-film-cheek-computer-animation-facial-expression-cartoon-png-favpng-jQX8u9tzFnDdLM1XhuMUSFSnT.jpg',
        OrederMenu: 'mutton Soups (2 plates)',
        status: 'Preparing',
        payment: '$25'
    }, {
        id: 10,
        WaiterName: 'Dhoni',
        orederId: 'A10',
        table: 10,
        imageUrl: 'https://img.favpng.com/22/3/23/animated-film-cheek-computer-animation-facial-expression-cartoon-png-favpng-jQX8u9tzFnDdLM1XhuMUSFSnT.jpg',
        OrederMenu: 'chiken Spicy wings (2 plates)',
        status: 'Completed',
        payment: '$125'
    },
    {
        id: 11,
        WaiterName: 'Rishab',
        orederId: 'A11',
        table: 2,
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.mlfObRKCDO4pgollystiHgHaIY&pid=Api&P=0&h=180',
        OrederMenu: 'Fish curry (1 plates)',
        status: 'Pending',
        payment: '$15'
    },
    {
        id: 12,
        WaiterName: 'Kohli',
        orederId: 'A12',
        table: 7,
        imageUrl: 'https://img.favpng.com/22/3/23/animated-film-cheek-computer-animation-facial-expression-cartoon-png-favpng-jQX8u9tzFnDdLM1XhuMUSFSnT.jpg',
        OrederMenu: 'mutton Soups (2 plates)',
        status: 'Preparing',
        payment: '$25'
    },
]

const OrderReportTables = () => {
    const customerStatus = (status) => {
        if (status === 'Completed') {
            return <p className='completed'>{status}</p>
        } else if (status === "Pending") {
            return <p className='pending'>{status}</p>
        } else {
            return <p className='preparing'>{status}</p>
        }
    }
    return (
        <div className='Home-main-container'>
            <div className='nav-bar'>
                <Navbar />
            </div>
            <div className='home-container'>
                <div className='order-report-main-container'>
                    <div className='oredr-report-sub-container'>
                        <div className='oredr-report-headers-card'>
                            <h1 className='entry-forms-main-heading'>Order Reports</h1>
                            <div className='order-report-search-card'>
                                <LuFileSearch2 className='search-icon' />
                                <input type='search' className='order-input-search' placeholder='search order by (Oreder-id)' />
                            </div>
                        </div>
                        <div className='oreders-report-tables-card-container'>
                            <table className='dashboard-table-main'>
                                <thead className='dash-b-table-head'>
                                    <th className='th-name-card'>Waiter Name</th>
                                    <th className='th-name-card'>Menu</th>
                                    <th className='th-name-card'>Order-id</th>
                                    <th className='th-name-card'>Table</th>
                                    <th className='th-name-card'>TotalPayment</th>
                                    <th className='th-name-card'>Status</th>
                                    <th className='th-name-card'>Payment-Status</th>
                                </thead>
                                <tbody className='table-rows-card'>
                                    {
                                        orderReportsLIst.map(each => (
                                            <tr className='dash-b-table-row' key={each.id}>
                                                <td className='tr-name-card'>
                                                    <img src={each.imageUrl} className='table-customer-image' />
                                                    {each.WaiterName}</td>
                                                <td className='tr-name-card'>{each.OrederMenu}</td>
                                                <td className='tr-name-card'>{each.orederId}</td>
                                                <td className='tr-name-card'>{each.table}</td>
                                                <td className='tr-name-card'>{each.payment}</td>
                                                <td className='tr-name-card'>
                                                    {customerStatus(each.status)}
                                                </td>
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

                </div>
            </div>
        </div>
    )
}

export default OrderReportTables