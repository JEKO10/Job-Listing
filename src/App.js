import { useState } from "react";
import Search from "./component/Search";
import Jobs from "./component/Jobs";
import HeaderImg from "./bg-header-desktop.svg";

function App() {
  const [filters, setFilters] = useState([]);

  const handleFilters = (tag) => {
    if (filters.indexOf(tag) === -1) {
      setFilters((prevValue) => [...prevValue, tag]);
    }
  };

  const clearAll = () => {
    setFilters([]);
  };

  const clearFilter = (tag) => {
    setFilters(filters.filter((item) => item !== tag));
  };

  return (
    <main>
      <header>
        <img src={HeaderImg} alt="IMG" />
      </header>
      {filters.length > 0 && (
        <Search
          filters={filters}
          clearAll={clearAll}
          clearFilter={clearFilter}
        />
      )}
      <Jobs handleFilters={handleFilters} filters={filters} />
    </main>
  );
}

export default App;
