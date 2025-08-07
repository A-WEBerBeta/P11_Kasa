import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import LogementDetail from "./pages/LogementDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./styles/index.scss";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="logement/:id" element={<LogementDetail />} />
        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
