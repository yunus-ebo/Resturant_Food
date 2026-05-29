

const FilteringTopbar = ({filterItem, setFilterItem}) => {
  const onChangeHandler = (e) => {
    const value = e.target.id;
    setFilterItem(value);
  }

  return (
    <div>
      <div>
        <input type="radio" name="filter" id="all" value={filterItem} onChange={onChangeHandler} checked={filterItem === "all"}/>
        <label htmlFor="all"> كل الوجبات </label>
      </div>
      <div>
        <input type="radio" name="filter" id="Filtitem1" value={filterItem} onChange={onChangeHandler} checked={filterItem === "Filtitem1"}/>
        <label htmlFor="Filtitem1"> وجبة 1 </label>
      </div>
      <div>
        <input type="radio" name="filter" id="Filtitem2" value={filterItem} onChange={onChangeHandler} checked={filterItem === "Filtitem2"}/>
        <label htmlFor="Filtitem2"> وجبة 2 </label>
      </div>
    </div>
  )
}

export default FilteringTopbar;