import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateArticle from "./components/CreateArticle";
import ArticlesDetails from "./pages/ArticlesDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new" element={<CreateArticle />} />
        <Route exact path="/articles/:id" element={<ArticlesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
