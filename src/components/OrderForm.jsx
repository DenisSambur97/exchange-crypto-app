import React, { useState } from 'react';
import { placeOrder } from './Blockchain'; // Импортируем функцию placeOrder

function OrderForm() {
    const [orderType, setOrderType] = useState('buy');
    const [tokenAmount, setTokenAmount] = useState('');
    const [tokenPrice, setTokenPrice] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Состояние для хранения сообщения об ошибке

    const handleOrderTypeChange = (event) => {
        setOrderType(event.target.value);
    };

    const handleTokenAmountChange = (event) => {
        setTokenAmount(event.target.value);
    };

    const handleTokenPriceChange = (event) => {
        setTokenPrice(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Вызываем функцию placeOrder для отправки транзакции размещения ордера
            await placeOrder(orderType, tokenAmount, tokenPrice);
            // Сбрасываем значения полей формы
            setTokenAmount('');
            setTokenPrice('');
            // Очищаем сообщение об ошибке
            setErrorMessage('');
        } catch (error) {
            // Устанавливаем сообщение об ошибке
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Place Order</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Отображение сообщения об ошибке */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Order Type:
                        <select value={orderType} onChange={handleOrderTypeChange}>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Token Amount:
                        <input type="number" value={tokenAmount} onChange={handleTokenAmountChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Token Price:
                        <input type="number" value={tokenPrice} onChange={handleTokenPriceChange} />
                    </label>
                </div>
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
}

export default OrderForm;
