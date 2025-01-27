import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreFront from "./pages/StoreFront";
import ProductDetails from "./pages/ProductDetails";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDelivery from "./pages/ProductDelivery";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<StoreFront />} />
        <Route path="/products/:id" element={<ProductDetails />}>
          <Route path="delivery" element={<ProductDelivery />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h2>Sayfa bulunamadı</h2>
              <p>Sayfa bulunamadı</p>
              <a href="/">Ana sayfaya dön</a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
