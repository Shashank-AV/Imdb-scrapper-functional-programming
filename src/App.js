import './App.css';
import SearchWrapper from "./components/SearchForm/SearchForm.jsx";
import Navigation from "./components/nav/nav.jsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchWrapper />
    </div>
  );
}

export default App;
