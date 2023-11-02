import { useEffect, useState, useContext } from "react";
import Context from "./context/Context";
import CurrencyContext from "./context/CurrencyContext";

export default function CurrencySelection() {
  //   {
  //     //   currency,
  //     //   setCurrency,
  //     //   exchangeRate,
  //     //   setExchangeRate,
  //   }

  const { currency, setCurrency } = useContext(CurrencyContext);
  const { state, dispatch } = useContext(Context);

  const [currencies, setCurrencies] = useState([]);

  //   **removed to prop drill and convert prices on BookList.jsx*******
  //   const [currency, setCurrency] = useState(currencyFromCurrencyContext);
  const [exchangeRate, setExchangeRate] = useState(1);

  const loadExchangeRates = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=" +
        currency
    );
    const data = await response.json();
    setExchangeRate(data.rate);
    dispatch({ ...state, exchangeRate: data.rate });
  };

  const getCurrencies = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php"
    );
    const data = await response.json();
    setCurrencies(data);
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  const handleSelect = (ev) => {
    setCurrency(ev.target.value);
  };

  useEffect(() => {
    // console.log("Currency changed: ", currency);
    loadExchangeRates();
  }, [currency]);

  return (
    <>
      <select
        name="currencies"
        id="currencies"
        value={currency}
        onChange={handleSelect}
      >
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <div> XCRate (EUR): {exchangeRate}</div>
    </>
  );
}
