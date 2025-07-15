import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./components/Navigation.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import "./styles/index.scss";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/a-propos" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
