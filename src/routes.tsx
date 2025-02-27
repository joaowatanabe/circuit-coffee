import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductPage } from "./pages/Product/ProductPage";


export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product/:id" element={<ProductPage/>} />
        </Routes>
    )
}