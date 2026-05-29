
const ListProductsNav = ({itemsSorted}) => {

  return (
    <div>
      <h1>{itemsSorted.label}</h1>
      <div className="westernMeals-images">
        {itemsSorted.map((item) => (
          <div className="western-datas">
            <div className="western-img">
              <img key={item.id} src={item.image} />
            </div>
            <p>{item.title}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProductsNav;
