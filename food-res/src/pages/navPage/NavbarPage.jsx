import "./navbarPage.css";
import { useParams } from "react-router-dom";
import { navLinks } from "../../data/dataLinks";
import ListProductsNav from "./ListProductsNav";
import TopbarNav from "./TopbarNav";
import { useState } from "react";
import Pagination from "./Pagination";

const NavbarPage = () => {
  const [filterItem, setFilterItem] = useState("all");
  const [selected, setSelected] = useState("noSort");
  const [currentPag,setCurrentPag] = useState(1);
  const { navPage } = useParams();
  const current = navLinks.find((curr) => curr.slug === navPage);
  // doing filtering
  const itemsFiltered = current.images.filter(item => 
    filterItem === "Filtitem1" ?
    item.category === "item1" :
    filterItem === "Filtitem2" ?
    item.category === "item2" :
    item
  );
  // doing sorting
  const itemsSorted =
    selected === "lowPrice" ?
    [...itemsFiltered].sort((a,b) => a.price - b.price ) :
    selected === "highPrice" ?
    [...itemsFiltered].sort((a,b) => b.price - a.price  ) :
    [...itemsFiltered].sort((a,b) => a.title > b.title ? 1 : -1)

  // doing pagination 
  const pag_perPAge = 3;
  const firstIndex = (currentPag - 1) * pag_perPAge;
  const finishIndex = currentPag * pag_perPAge;
  const itemsOrdered = itemsSorted.slice(firstIndex, finishIndex)

  const pages = Math.ceil(itemsSorted.length / pag_perPAge);



  return (
    <div className="navbarPageContainer">
      <TopbarNav
       filterItem={filterItem}
       setFilterItem={setFilterItem}
       selected={selected}
       setSelected={setSelected}
       />
      <ListProductsNav itemsOrdered={itemsOrdered}/>
      <Pagination pages={pages} currentPag={currentPag} setCurrentPag={setCurrentPag}/>
    </div>
  );
};
export default NavbarPage;