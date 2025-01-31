const Filters = ({ selectedFilter, onFilterChange, searchTerm, onSearch, onSortToggle, orderAZ }) => {
    return (
      <div className="row align-items-center justify-content-end pb-3 pt-5 gap-3 gap-md-0">
        <div className="col-12 col-md-auto">
          <div className="dropdown">
            <button className="btn active dropdown-toggle rounded-pill px-4 py-1 shadow-sm w-100" type="button" data-bs-toggle="dropdown">
              <span className="text-body-tertiary">
                Filter by: {selectedFilter ? selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1) : "None"}
              </span>
            </button>
            <ul className="dropdown-menu">
              {["family", "order", "genus"].map((category) => (
                <li key={category}>
                  <button className="dropdown-item" onClick={() => onFilterChange(category)}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-auto">
          <input className="form-control rounded-pill px-4 py-1 shadow-sm" type="text" placeholder="Search 🔍" value={searchTerm} onChange={onSearch} />
        </div>
        <div className="col-12 col-md-auto">
          <button className="btn btn-outline-dark rounded-pill px-4 py-1 shadow-sm" onClick={onSortToggle}>
            {orderAZ ? "Order A - Z" : "Order Z - A"}
          </button>
        </div>
      </div>
    );
  };
  
  export default Filters;
  