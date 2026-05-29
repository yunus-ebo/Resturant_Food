
const SortingTopbar = ({selected, setSelected}) => {
  const onChangeHandler = (e) => {
    const value = e.target.id;
    setSelected(value);
  }
  
  return (
    <div>
      <div>
        <input type="radio" name="sort" id="noSort" value={selected} onChange={onChangeHandler} checked={selected === "noSort"}/>
        <label htmlFor="noSort"> كل الاسعار </label>
      </div>
       <div>
        <input type="radio" name="sort" id="highPrice" value="" onChange={onChangeHandler} checked={selected === "highPrice"}/>
        <label htmlFor="noSort"> الأعلى </label>
      </div>
       <div>
        <input type="radio" name="sort" id="lowPrice" value="" onChange={onChangeHandler} checked={selected === "lowPrice"}/>
        <label htmlFor="noSort"> الأقل </label>
      </div>
    </div>
  )
}

export default SortingTopbar