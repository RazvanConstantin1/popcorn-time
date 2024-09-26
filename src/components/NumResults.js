import React from "react";

const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      Found{" "}
      <span>
        <strong>{movies.length}</strong>
      </span>{" "}
      results
    </p>
  );
};

export default NumResults;
