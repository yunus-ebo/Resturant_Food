import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Orders from "./pages/orders/Orders";
import ContactUS from "./pages/contactUs/ContactUS";
import NavbarPage from "./pages/navPage/NavbarPage";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import MealsPage from "./pages/mealsPage/MealsPage";
import Kitchen from "./pages/kitchen/Kitchen";
import BannerPage from "./pages/bannerPage/BannerPage";
import CategoryPages from "./pages/categoriesPage/CategoryPages";
import CandyPage from "./pages/candyPage/CandyPage";
import OfferPage from './pages/offerPage/OfferPage'
import Auth from "./pages/authentication/Auth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Auth />}/>
        <Route path="/:navPage" element={<NavbarPage />} />
        <Route path="/bannerPage" element={<BannerPage />} />
        <Route path="/mealsPage" element={<MealsPage />} />
        <Route path="/contactUs" element={<ContactUS />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/categoriesPage/:id" element={<CategoryPages />}/>
        <Route path="/candyPage/:id" element={<CandyPage />}/>
        <Route path="/offerPage/:id" element={<OfferPage />}/>
      </Routes>
      <Footer />
    </>
  );
}
export default App;