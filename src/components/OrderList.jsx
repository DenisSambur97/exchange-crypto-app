import React, {useEffect, useState} from 'react';
import {getOrders} from './Blockchain';

function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const fetchedOrders = await getOrders();
            setOrders(fetchedOrders);
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h2>My Orders</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        Type: {order.type}, Amount: {order.amount}, Price: {order.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrderList;
