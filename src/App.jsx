import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { searchPhotos } from "./API";
import "./App.css";

function App() {
  // const [searchQuery, setSearchQuery] = useState("");
  const [imageGallery, setImageGallery] = useState([]);

  const handleSearchSubmit = async (inputValue) => {
    try {
      const data = await searchPhotos(inputValue);
      setImageGallery(data.results);
      console.log(data.results);
    } catch {
      console.log("");
    }
  };

  // useEffect(() => {
  //   if (searchQuery === "") return;
  // });

  return (
    <>
      <SearchBar onSearch={handleSearchSubmit} />
      {imageGallery.length > 0 && <ImageGallery imageGallery={imageGallery} />}
    </>
  );
}

export default App;
