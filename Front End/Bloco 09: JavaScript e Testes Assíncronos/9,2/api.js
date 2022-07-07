const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCoin = async () =>{
    const coin = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());
    console.log(coin);
    return coin;
}

const setCoins = async() => {
    const coin = await fetchCoin();

    const coinList = document.getElementById('coins-list');

    coin.filter((coin, index) => index < 10).forEach((coin) => {
        const coinListItem = document.createElement('li');
        coinListItem.innerText = `${coin.name} (${coin.symbol}) : ${coin.priceUsd}`;
        coinList.appendChild(coinListItem);
    })
}

window.onload = () => setCoins();