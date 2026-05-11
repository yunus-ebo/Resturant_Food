import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Orders from "./pages/orders/Orders";
import ContactUS from "./pages/contactUs/ContactUS";
import CategoryPage from "./pages/category/CategoryPage";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import MealsPage from "./pages/mealsPage/MealsPage";
import Kitchen from "./pages/kitchen/Kitchen";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/mealsPage/:id" element={<MealsPage />} />
        <Route path="/contactUs" element={<ContactUS />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;