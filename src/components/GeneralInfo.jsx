const GeneralInfo = ({ totals, filteredData }) => {

    return (
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
    );
}
export default GeneralInfo;