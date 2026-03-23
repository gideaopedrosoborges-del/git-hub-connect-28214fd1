import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Manifesto from "./pages/Manifesto";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/manifesto" element={<Manifesto />} />
      </Route>
    </Routes>
  </BrowserRouter>
);