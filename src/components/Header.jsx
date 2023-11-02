import "./Header.scss";
import SearchBox from "./SearchBox";
import TopMenu from "./TopMenu";

export default function Header({
  currentPage,
  setCurrentPage,
  user,
  // currency,
  // setCurrency,
  exchangeRate,
  setExchangeRate,
}) {
  return (
    <>
      <TopMenu
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        // currency={currency}
        // setCurrency={setCurrency}
        exchangeRate={exchangeRate}
        setExchangeRate={setExchangeRate}
      />
      <header className="header">
        <div className="header__sitename">Shook-Bop</div>
        {user !== null && (
          <div className="header__user">Welcome {user.name}</div>
        )}
      </header>
      <SearchBox />
    </>
  );
}
