import React from 'react';
import style from './MainScreen.module.css';

function MainScreen() {
    return (
        <div className={style.animatedBackground}>
            <div className={`${style.ellipse} ${style.ellipse170}`} />
            <div className={`${style.ellipse} ${style.ellipse171}`} />
            <div className={`${style.ellipse} ${style.ellipse169}`} />
            <div className={`${style.ellipse} ${style.ellipse168}`} />
        </div> /* Это для анимированного фона */
        /*Чтобы проверить функционал*/
        /*<OrderForm />*/
        /*<OrderList orders={orders} />*/
        /*<PriceList prices={prices} />*/
    );
}

export default MainScreen;
