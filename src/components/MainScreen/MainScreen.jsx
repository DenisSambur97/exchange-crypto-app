// MainScreen.jsx
import React from 'react';
import OrderForm from './OrderForm';

import './MainScreen.css'; // Подключаем стили для анимированного фона

function MainScreen() {
    return (
        <div className="main-screen">
            <div className="animated-background">
                <div className="ellipse ellipse-170"/>
                <div className="ellipse ellipse-171"/>
                <div className="ellipse ellipse-169"/>
                <div className="ellipse ellipse-168"/>
            </div> {/* Это для анимированного фона */}
            <OrderForm />
            {/*<OrderList orders={orders} />*/}
            {/*<PriceList prices={prices} />*/}
        </div>
    );
}

export default MainScreen;
