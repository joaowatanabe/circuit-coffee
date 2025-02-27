import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/global.css";
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes'
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Header />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      <Footer />
    </CartProvider>
  </StrictMode>
);
