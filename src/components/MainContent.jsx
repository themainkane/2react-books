import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HomePage from "./Homepage";
import LoginForm from "./LoginForm";
import "./maincontent.scss";

export default function MainContent({
  currentPage,
  user,
  setUser,
  currency,
  exchangeRate,
}) {
  return (
    <div className="app">
      <h1 className="app__healine">Shook-Bop</h1>
      {currentPage === "" && (
        <HomePage exchangeRate={exchangeRate} currency={currency} />
      )}
      {currentPage === "about" && <AboutUs />}
      {currentPage === "contact" && <ContactUs />}
      {currentPage === "login" && <LoginForm user={user} setUser={setUser} />}
    </div>
  );
}
