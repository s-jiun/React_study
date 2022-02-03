import {useState, useEffect} from "react";

function App() {
  const[loading, setLoading] = useState(true);
  const[coins, setCoins] = useState([]);
  const[value, setValue] = useState(0);
  const[selected, setSelected] = useState("btc-bitcoin");
  const[endConvert, setConverted] = useState('');
  let converted = 0;

  const onChangeInput = (event) => {
    setValue(event.target.value);
  }

  const onClick = () => {
    const selectedCoin = coins.find((coin) => coin.id === selected);
    converted = value / selectedCoin.quotes.USD.price;
    const showConverted = `${converted}` + selectedCoin.symbol;
    setConverted(showConverted);
    return showConverted;
  }

  const onChangeSelect = (event) => {
    setSelected(event.target.value);
  }


  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  }, [])

  return (
    <div>
      <h1>Coin Converter</h1>
      {loading ? 
        <div className="spinner-border m-5" role="status"><span className="visually-hidden">Loading...</span></div> : 
        <select onChange={onChangeSelect}>{coins.map((coin) => <option value={coin.id}>{coin.name} ({coin.symbol})</option>)}</select>
      }
      <br />
      <div>
        <input type="number" onChange={onChangeInput} placeholder="type USD"></input>
        <button onClick={onClick}>Convert</button>
      </div>
      <br />
      {endConvert !== '' ? <span>{`You can buy ${endConvert}`}</span> : null}
    </div>
  );
}

export default App;
