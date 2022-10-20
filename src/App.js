import Home from "./pages/Home";
import Nav from "./shared/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
