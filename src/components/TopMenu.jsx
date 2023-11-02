import { useState } from "react";
import "./topmenu.scss";
import CurrencySelection from "./CurrencySelection";

export default function TopMenu({
  // currency,
  // setCurrency,
  currentPage,
  setCurrentPage,
  // exchangeRate,
  // setExchangeRate,
}) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="top-menu">
        <div className="top-menu__currencies">
          <CurrencySelection
          // currency={currency}
          // setCurrency={setCurrency}
          // exchangeRate={exchangeRate}
          // setExchangeRate={setExchangeRate}
          />
        </div>

        {open ? (
          <nav className="top-menu__nav">
            <a
              className={
                `link` + (currentPage === "" ? " link--highlighted" : "")
              }
              href="#"
              onClick={() => {
                changePage("");
              }}
            >
              Home
            </a>
            <a
              className={
                `link` + (currentPage === "about" ? " link--highlighted" : "")
              }
              href="#about"
              onClick={() => {
                changePage("about");
              }}
            >
              About Us
            </a>
            <a
              className={
                `link` + (currentPage === "contact" ? " link--highlighted" : "")
              }
              href="#contact"
              onClick={() => {
                changePage("contact");
              }}
            >
              Contact Us
            </a>
            <a
              className={
                `link` + (currentPage === "login" ? " link--highlighted" : "")
              }
              href="#contact"
              onClick={() => {
                changePage("login");
              }}
            >
              Login
            </a>
          </nav>
        ) : (
          ""
        )}
        <div
          className="top-menu__burger-icon"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="top-menu__burger-icon-stripe"></div>
          <div className="top-menu__burger-icon-stripe"></div>
          <div className="top-menu__burger-icon-stripe"></div>
        </div>
      </div>
    </>
  );
}
