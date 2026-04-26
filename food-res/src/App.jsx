import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Orders from "./pages/orders/Orders";
import ContactUS from './pages/contactUs/ContactUS'
import Reviews from './pages/reviews/Reviews'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contactUs" Component={ContactUS}/>
        <Route path="/reviews" Component={Reviews}/>
        <Route path="/orders" Component={Orders}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
export default App;