// Blockchain.js
import Web3 from 'web3';

const infuraUrl = 'https://goerli.infura.io/v3/c5c4cd0c741d419c91365564c8b2f1cd'; // Замените YOUR_INFURA_PROJECT_ID на ваш ключ Infura

// Адрес контракта или экземпляр контракта
const contractAddress = '0x22961F4EB722B9582E9743a662e6f1c051add4df';

// Функция для размещения ордера
export const placeOrder = async (type, amount, price) => {
    try {
        // Инициализация Web3
        const web3 = new Web3(window.ethereum);
        // Запрашиваем разрешение MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Получаем аккаунт пользователя из MetaMask
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        // Составляем данные транзакции
        const value = web3.utils.toWei((amount * price).toString(), 'ether');

        const data = {
            from: account,
            to: contractAddress,
            value: value,
        };

        // Отправляем транзакцию через MetaMask
        await web3.eth.sendTransaction(data);

        console.log('Order placed successfully:', { type, amount, price, account });
    } catch (error) {
        console.error('Failed to place order:', error);
    }
};

// Функция для получения списка заявок пользователя
export async function getOrders() {
    // Ваша логика для получения списка заявок пользователя с блокчейна
    return [
        { type: 'buy', amount: 10, price: 100 },
        { type: 'sell', amount: 5, price: 150 }
    ];
}

// Функция для получения текущих цен
export async function getPrices() {
    // Ваша логика для получения текущих цен с блокчейна
    return {
        'ETH/USD': 2000,
        'BTC/USD': 50000
    };
}