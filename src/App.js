import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [amount, setAmount] = useState("0");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {

        setCoins(json);
        setLoading(false);
      });
  }, []);
  const findCoin = id => {
    return coins.find(coin => coin.id === id);
  }
  const onMoneyChange = (event) => {
    setMoney(event.target.value);
    const select = document.getElementById('coinList');
    console.log(select.options[select.selectedIndex].id);
    console.log(select.options[select.selectedIndex].value);
    const id = select.options[select.selectedIndex].id;
    const coin = findCoin(id);
    setAmount(parseInt(event.target.value) / parseInt(coin.quotes.USD.price));
  }
  const onSelectChange = (event) => {
    const select = event.target;
    console.log(select.options[select.selectedIndex].id);
    console.log(select.options[select.selectedIndex].value);
    const id = select.options[select.selectedIndex].id;
    const coin = findCoin(id);
    setAmount(parseInt(money) / parseInt(coin.quotes.USD.price));
  }
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select id="coinList" onChange={onSelectChange}>
        {coins.map((coin) => (
          <option key={coin.id} id={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <form>
        <div><label htmlFor="money">Money(USD) $</label><input onChange={onMoneyChange} id="money" type="number" placeholder="Money to buy coin" value={money} /></div>
        <div><label htmlFor="amount">Coins could be bought</label><input id="amount" type="text" value={amount} readOnly /></div>
      </form>
    </div>
  );
}

export default App;
