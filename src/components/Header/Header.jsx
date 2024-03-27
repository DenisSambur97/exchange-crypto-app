import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import {shortenAddress} from '../../helpers/shortenAddress';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Fox} from '../../assets/fox.svg';
import {ReactComponent as Pin} from '../../assets/pin.svg';
import style from './Header.module.css'

function Header() {
    const [walletAddress, setWalletAddress] = useState(null);
    const [networkId, setNetworkId] = useState(null); // По макету сеть нигде не отображается, но по ТЗ должно считывается изменение

    useEffect(() => {
        async function fetchWalletAddress() {
            try {
                if (window.ethereum) {
                    const web3 = new Web3(window.ethereum);
                    const accounts = await web3.eth.getAccounts();
                    if (accounts.length > 0) {
                        setWalletAddress(accounts[0]);
                    }
                    const networkId = await web3.eth.net.getId();
                    setNetworkId(networkId);
                } else {
                    console.warn('MetaMask not found');
                }
            } catch (error) {
                console.error('Failed to fetch wallet address:', error);
            }
        }

        fetchWalletAddress();

        // Добавляем обработчики событий изменения аккаунта и сети в MetaMask
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);
        }

        return () => {
            // Удаляем обработчики событий при размонтировании компонента
            if (window.ethereum) {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                window.ethereum.removeListener('chainChanged', handleChainChanged);
            }
        };
    }, []);

    const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
        } else {
            setWalletAddress(null);
        }
    };

    const handleChainChanged = (chainId) => {
        setNetworkId(chainId);
    };

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({method: 'eth_requestAccounts'});
            } catch (error) {
                console.error('Failed to connect wallet:', error);
            }
        } else {
            console.error('MetaMask not found');
            alert('MetaMask not found');
        }
    };

    return (
        <header className={style.header}>
            <Logo/>
            {/* Проверяем, подключен ли кошелек, и отображаем соответствующую информацию */}
            {walletAddress
                ?
                <button disabled className={style.header__btn_active}>
                    <Fox/>
                    <span>{shortenAddress(walletAddress)}</span>
                    <Pin/>
                </button>
                :
                <button onClick={connectWallet} className={style.header__btn}>Connect Wallet</button>
            }
        </header>
    );
}

export default Header;
