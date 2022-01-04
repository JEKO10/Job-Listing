import React from "react";
import { TiDelete } from "react-icons/ti";

function Search({ filters, clearAll, clearFilter }) {
  return (
    <section>
      <div className="searchBar">
        <div>
          {filters.map((tag, index) => {
            return (
              <h3 key={index} className="filterTag">
                {tag}
                <button
                  onClick={() => {
                    clearFilter(tag);
                  }}
                  className="remove-btn"
                >
                  <TiDelete />
                </button>
              </h3>
            );
          })}
        </div>
        <button
          onClick={() => {
            clearAll();
          }}
        >
          Clear
        </button>
      </div>
    </section>
  );
}

export default Search;
