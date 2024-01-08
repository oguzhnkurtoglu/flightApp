import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import data from "./data/data.json"

const App = () => {
  return <div className="h-screen">
  <Navbar />
  <SearchBar/>
  {console.log(data)}
  </div>

};

export default App;
