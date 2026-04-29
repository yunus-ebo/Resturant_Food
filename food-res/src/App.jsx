import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Orders from "./pages/orders/Orders";
import ContactUS from './pages/contactUs/ContactUS'
import Reviews from './pages/reviews/Reviews'
import CategoryPage from "./pages/category/CategoryPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/contactUs" element={<ContactUS />}/>
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/orders" element={<Orders />}/>
      </Routes>
      <Footer />
    </>
  );
}
export default App;