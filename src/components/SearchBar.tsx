import { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  return (
    <form>
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      ></SearchManufacturer>
    </form>
  );
};
export default SearchBar;
