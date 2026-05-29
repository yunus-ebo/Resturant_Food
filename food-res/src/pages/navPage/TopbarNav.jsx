import FilteringTopbar from './FilteringTopbar';
import SortingTopbar from './SortingTopbar';
const TopbarNav = ({filterItem, setFilterItem, selected, setSelected}) => {
  return (
    <div className='topbarContainer'>
        <div className="product-filtering">
            <h4> فلتر حسب المنتج </h4>
            <FilteringTopbar filterItem={filterItem} setFilterItem={setFilterItem}/>
        </div>
        <div className="price-filtering">
            <h4> فلتر حسب السعر </h4>
            <SortingTopbar selected={selected} setSelected={setSelected}/>
        </div>
    </div>
  )
}

export default TopbarNav;