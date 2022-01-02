import Jobs from "./component/Jobs";
import Search from "./component/Search";
import HeaderImg from "./bg-header-desktop.svg";

function App() {
  return (
    <main>
      <header>
        <img src={HeaderImg} alt="IMG" />
      </header>
      <Search />
      <Jobs />
    </main>
  );
}

export default App;
