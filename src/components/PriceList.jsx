import React, { useEffect, useState } from 'react';
import { getPrices } from './Blockchain';

function PriceList() {
    const [prices, setPrices] = useState({});

    useEffect(() => {
        const fetchPrices = async () => {
            const fetchedPrices = await getPrices();
            setPrices(fetchedPrices);
        };

        fetchPrices();
    }, []);

    return (
        <div>
            <h2>Current Prices</h2>
            <ul>
                {Object.entries(prices).map(([pair, price]) => (
                    <li key={pair}>
                        {pair}: {price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PriceList;
