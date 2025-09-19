import { Routes, Route } from "react-router-dom";

// TODO: перенести в файл импортов
import Home, { HomeWithoutLoad } from "./pages/main_page";
import About from "./pages/about_me";
import Works from "./pages/Works/works";
import Background from "./components/Background";
import TgWorks from "./pages/Works/tg_works";
import WebWorks from "./pages/Works/web_works";

function App() {
  return (
    <div>
      <Background></Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeWithoutLoad />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/tg_works" element={<TgWorks />} />
        <Route path="/works/web_works" element={<WebWorks />} />
      </Routes>
    </div>
  );
}

export default App;
