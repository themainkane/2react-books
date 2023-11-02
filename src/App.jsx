import { useReducer, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CurrencyContext from "./components/context/CurrencyContext";
import Context from "./components/context/Context";
import Reducer from "./components/context/Reducer";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [user, setUser] = useState(null);
  const [currency, setCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [contextValue, setContextValue] = useReducer(Reducer(), {
    user: null,
    exchangeRate: 1,
    currentPage: "",
    currency: "USD",
    authHash: null,
    shoppingCart: [],
  });

  return (
    <>
      <Context.Provider
        value={{
          state: contextValue,
          dispatch: setContextValue,
        }}
      >
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
      </Context.Provider>
    </>
  );
}

export default App;
