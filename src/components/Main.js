import React, { useContext } from 'react'
import profilePics from '../img/user-info.png'
import { GetAPIData } from './GlobalProvider'

function Main() {
    const { order_id, user, items, createdAt } = useContext(GetAPIData)
    let price = 0 
    let tax = 0
    if(items) {
        for(let item of items) {
            price += item.price
            tax += item.tax_pct
        }
    }
    return (
        <main>
            <div className="items">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Currency</th>
                                <th>Tax (%)</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items ? items.map(item => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.tax_pct}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            )): 'Loading...'}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="profile">
                <div className="logo">
                    <img src={profilePics} alt="user-img" />
                </div>
                <div className="user-info">
                    <h3>Name: {user ? user.name : 'Loading...'}</h3>
                    <p>{user ? user.about : 'Loading...'}</p>
                    <p>Phone: {user ? user.phone : 'Loading...'}</p>
                    <p>Address: {user ? user.address : 'Loading...'}</p>
                </div>
                <div className="additional-info">
                    <p>Order ID: {order_id ? order_id : 'Loading...'}</p>
                    <p>Total Items Ordered: {items ? items.length : 0}</p>
                    <p>Total Price: {price}</p>
                    <p>% Tax: {tax}</p>
                    <p>Date Ordered: {createdAt ? createdAt : 'Loading...'}</p>
                </div>
            </div>
        </main>
    )
}

export default Main
