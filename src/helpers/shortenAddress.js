export function shortenAddress(fullAddress) {
    if (typeof fullAddress !== 'string' || fullAddress.length < 10) {
        return "Invalid address";
    }
    return fullAddress.slice(0, 10) + "..." + fullAddress.slice(-4);
}