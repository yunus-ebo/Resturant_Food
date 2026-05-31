
const Pagination = ({pages, currentPag, setCurrentPag}) => {
    const pagesNum = [];
    for(let i = 1;i <= pages;i++){
        pagesNum.push(i);
    }

  return (
    <div className="paginationContainer">
        <button
        onClick={() => setCurrentPag(prev => prev + 1)}
        disabled={currentPag === pages}
        className="nextBtn"> التالي </button>
            {pagesNum.map(item => (
                <div
                onClick={() => setCurrentPag(item)}
                 className="paginate_perPage">
                    {item}
                </div>
            ))}
        <button
        onClick={() => setCurrentPag(prev => prev - 1)}
        disabled={currentPag === 1}
        className="previousBtn"> السابق </button>
    </div>
  )
}

export default Pagination