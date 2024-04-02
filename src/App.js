import "./App.css";
import { SearchForm } from "./components/SearchForm";

const App = () => {
  return (
    <div className="container text-warning">
      <div className="row">
        <div className="col">
          <h1>My Movie Collections!</h1>
        </div>
      </div>
      <hr />
      {/* Search Section */}
      <SearchForm/>

      {/* Movie list Section */}
    </div>);
};

export default App;