import React from "react";
import "./style.css";

const Filter = ({ filterdata, category, setCategory }) => {
  const filterHandler = (title) => {
    setCategory(title);
  };
  console.log("Category set to- ", category);

  return (
    <div className="flex justify-center px-2 py-3 gap-x-4">
      {filterdata.map((data) => (
        <div className="filter-div" key={data.id}>
          <button
            className={`filter-btn bg-black hover:bg-opacity-50 border-2 px-2 border-white rounded-md text-white 
             ${
               category === data.title
                 ? "bg-opacity-60 border-white"
                 : "bg-opacity-40 border-transparent"
             } 
              `}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Filter;
