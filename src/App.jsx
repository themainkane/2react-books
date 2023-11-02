import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CurrencyContext from "./components/context/CurrencyContext";
import Context from "./components/context/Context";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [user, setUser] = useState(null);
  const [currency, setCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(1);

  Context = {
    user: null,
    theme: "light",
    language: "en",
    currency: "USD",
    authHash: null,
    shoppingCart: [],
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        // currency={currency}
        // setCurrency={setCurrency}
        exchangeRate={exchangeRate}
        setExchangeRate={setExchangeRate}
        user={user}
      />
      <MainContent
        currentPage={currentPage}
        user={user}
        setUser={setUser}
        // currency={currency}
        exchangeRate={exchangeRate}
      />
      <Footer />
    </CurrencyContext.Provider>
  );
}

export default App;
