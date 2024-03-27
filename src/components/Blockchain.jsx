import Web3 from 'web3';
const infuraProjectId = process.env.INFURA_PROJECT_ID;
const contactAddressId = process.env.CONTRACT_ADDRESS
const infuraUrl = `https://goerli.infura.io/v3/${infuraProjectId}`; // нужен в дальнейшем

// Адрес контракта или экземпляр контракта
const contractAddress = contactAddressId;

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
