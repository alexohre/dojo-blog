import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateArticle from "./components/CreateArticle";
import ArticlesDetails from "./pages/ArticlesDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<CreateArticle />} />
        <Route path="/articles/:id" element={<ArticlesDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
