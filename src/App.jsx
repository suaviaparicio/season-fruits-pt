import { useState, useEffect } from 'react';
import './App.css';

const FRUIT_ENDPOINT = "https://api.allorigins.win/raw?url=https://fruityvice.com/api/fruit/all";
const DRIVE_ENDPOINT = `https://www.googleapis.com/drive/v3/files?q='1SyuYFHV7WtQk_1JyjJ7GF0YFVxYey8GM'+in+parents&fields=files(id,name)&key=${import.meta.env.VITE_GOOGLE_DRIVE_API_KEY}`;

const App = () => {
  const [fruitData, setFruitData] = useState([]);
  const [seeMore, setSeeMore] = useState(8);
  const [orderAZ, setOrderAZ] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [totals, setTotals] = useState({
    calories: 0,
    fat: 0,
    sugar: 0,
    carbohydrates: 0,
    protein: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const driveResponse = await fetch(DRIVE_ENDPOINT);
        const fruitResponse = await fetch(FRUIT_ENDPOINT);

        const driveData = await driveResponse.json();
        const fruitData = await fruitResponse.json();

        const mergedData = fruitData.map(fruit => ({
          ...fruit,
          image_url: getImageUrl(fruit.name, driveData.files),
        }));

        setFruitData(mergedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (fruitName, driveFiles) => {
    const removeExtension = (filename) => filename.replace(/\.[^/.]+$/, "");

    const matchedFile = driveFiles.find(
      (file) => removeExtension(file.name).toLowerCase() === fruitName.toLowerCase()
    );

    return matchedFile
      ? `https://lh3.googleusercontent.com/d/${matchedFile.id}=w800-h600`
      : "https://lh3.googleusercontent.com/d/1ey8ORIUK1xq-X6cMUOcFwagjKo14Z3o0=w800-h600";
  };

  const handleSeeMore = () => {
    setSeeMore(seeMore + 4);
  };

  const handleOrderAZ = () => {
    setFruitData([...fruitData].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleOrderZA = () => {
    setFruitData([...fruitData].sort((a, b) => b.name.localeCompare(a.name)));
  }

  const handleSortToggle = () => {
    if (orderAZ) {
      handleOrderAZ();
    } else {
      handleOrderZA();
    }
    setOrderAZ(!orderAZ);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = fruitData.filter((fruit) =>
    selectedFilter && fruit[selectedFilter]
      ? fruit[selectedFilter].toLowerCase().includes(searchTerm)
      : true
  );

  useEffect(() => {
  const calculateTotals = () => {
    const totalValues = filteredData.reduce(
      (totals, fruit) => {
        totals.calories += fruit.nutritions.calories;
        totals.fat += fruit.nutritions.fat;
        totals.sugar += fruit.nutritions.sugar;
        totals.carbohydrates += fruit.nutritions.carbohydrates;
        totals.protein += fruit.nutritions.protein;
        return totals;
      },
      { calories: 0, fat: 0, sugar: 0, carbohydrates: 0, protein: 0 }
    );

    // Round all totals here
    const roundedTotals = {
      calories: Math.round(totalValues.calories),
      fat: Math.round(totalValues.fat),
      sugar: Math.round(totalValues.sugar),
      carbohydrates: Math.round(totalValues.carbohydrates),
      protein: Math.round(totalValues.protein),
    };

    setTotals((prevTotals) => {
      if (
        prevTotals.calories !== roundedTotals.calories ||
        prevTotals.fat !== roundedTotals.fat ||
        prevTotals.sugar !== roundedTotals.sugar ||
        prevTotals.carbohydrates !== roundedTotals.carbohydrates ||
        prevTotals.protein !== roundedTotals.protein
      ) {
        return roundedTotals;
      }
      return prevTotals;
    });
  };

  calculateTotals();
}, [filteredData]); 


  return (
    <>
      <div className="container mt-4">
        <h1>Season Fruits</h1>
        <h4 className="text-warning">THE MOST WONDERFUL FRUITS</h4>

        <div className="row g-4 align-items-start">

          <div className="col-12 col-lg-9">
            <div className='products'>
              <div className='row align-items-center justify-content-end pb-3 pt-5 gap-3 gap-md-0'>
                <div className='col-12 col-md-auto'>
                  <div className="dropdown">
                    <button className="btn active dropdown-toggle rounded-pill px-4 py-1 shadow-sm w-100 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className='text-body-tertiary'>
                        Filter by: {selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      {["family", "order", "genus"].map((category) => (
                        <li key={category}>
                          <button className="dropdown-item" onClick={() => handleFilterChange(category)}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='col-12 col-md-auto'>
                  <input
                    className="form-control rounded-pill px-4 py-1 shadow-sm w-100 border-black"
                    type="text"
                    placeholder={`Search by ${selectedFilter} 🔍`}
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <div className='col-12 col-md-auto'>
                  <button type="button" className="btn btn-outline-dark rounded-pill px-4 py-1 shadow-sm fw-semibold w-100" onClick={handleSortToggle}>
                    {orderAZ ? 'Order A - Z' : 'Order Z - A'}
                  </button>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-3 g-4">
                {filteredData.slice(0, seeMore).map((fruit) => (
                  <div className="col" key={fruit.id}>
                    <div className="card h-100 shadow border-0 rounded-4 p-0">
                      <img src={fruit.image_url} className="card-img-top h-100 rounded-top-4" alt={fruit.name} />
                      <div className="card-body h-100 px-4">
                        <h5 className="row card-title text-warning text-start">{fruit.name}</h5>
                      </div>
                      <div className="row text-secondary px-3 small text-start">
                        <div className="col">
                          <p>
                            <strong>Family:</strong> {fruit.family}
                          </p>
                        </div>
                        <div className="col">
                          <p>
                            <strong>Order:</strong> {fruit.order}
                          </p>
                        </div>
                        <div className="col">
                          <p>
                            <strong>Genus:</strong> {fruit.genus}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 px-3 pb-3">
                        <h6 className="text-warning text-start">Nutritions</h6>
                        <ul className="list-unstyled text-secondary small mb-0">
                          <li className="d-flex justify-content-between">
                            <strong className="text-start">Calories:</strong>
                            <span className="text-end">{fruit.nutritions.calories}</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong className="text-start">Fat:</strong>
                            <span className="text-end">{fruit.nutritions.fat}</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong className="text-start">Sugar:</strong>
                            <span className="text-end">{fruit.nutritions.sugar}</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong className="text-start">Carbohydrates:</strong>
                            <span className="text-end">{fruit.nutritions.carbohydrates}</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong className="text-start">Protein:</strong>
                            <span className="text-end">{fruit.nutritions.protein}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="position-absolute top-0 end-0 p-3">
                        <button className="btn btn-light rounded-circle border-1">
                          <i className="bi bi-heart text-warning fs-6"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {seeMore < filteredData.length && (
                <div className="text-center mt-4">
                  <button className="btn btn-dark rounded-pill px-4 py-2 fs-" onClick={handleSeeMore}>
                    SEE MORE
                  </button>
                </div>
              )}
            </div>
          </div>


          <div className='col-12 col-lg-3'>
            <div className="general_information py-4 px-1 mt-4 ">
              <div className="card p-3 shadow-sm rounded-4 text-start text-bg-light border-0">
                <h5 className="text-warning fw-bold fs-5">General Information</h5>
                <h4 className="mb-2 fs-6">
                  <strong>No. Of Found Products:</strong>
                  <span className="float-end">{filteredData.length}</span>
                </h4>
                <p className="mb-2 text-warning fs-6">
                  <strong>Nutritional properties of found products:</strong>
                </p>
                <ul className="list-unstyled small">
                  <li className="mb-2 d-flex justify-content-between">
                    <span>Total calories:</span>
                    <span>{totals.calories}</span>
                  </li>
                  <li className="mb-2 d-flex justify-content-between">
                    <span>Total fats:</span>
                    <span>{totals.fat}</span>
                  </li>
                  <li className="mb-2 d-flex justify-content-between">
                    <span>Total sugar:</span>
                    <span>{totals.sugar}</span>
                  </li>
                  <li className="mb-2 d-flex justify-content-between">
                    <span>Total carbohydrates:</span>
                    <span>{totals.carbohydrates}</span>
                  </li>
                  <li className="mb-2 d-flex justify-content-between">
                    <span>Total proteins:</span>
                    <span>{totals.protein}</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
