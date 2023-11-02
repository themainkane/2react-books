import { useState } from "react";
import "./searchbox.scss";

import(useState);
export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (ev) => {
    setSearchTerm(ev.target.value);
    console.log(searchTerm);
  };
  return (
    <>
      <input
        className="search"
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onInput={handleInputChange}
      />
    </>
  );
}
