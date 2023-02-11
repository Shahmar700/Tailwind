import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./companents/Header";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
