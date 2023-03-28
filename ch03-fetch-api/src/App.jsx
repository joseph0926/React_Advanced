import React, { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import Searchbar from "./components/Searchbar";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (searchTerm) => {
    const result = await searchImages(searchTerm);
    searchImages(result);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
