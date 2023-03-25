import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("b");
  const [searchParams, setSearchParams] = useSearchParams();
  setSearchParams(searchTerm);
  return (
    <div>
      <h2>search form component</h2>
    </div>
  );
};

export default SearchForm;
