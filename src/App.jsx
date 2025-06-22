import { searchPhotos } from "./API";

import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";

import "./App.css";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imageGallery, setImageGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearchSubmit = async (inputValue) => {
    try {
      setIsError(false);
      setIsLoading(true);
      setImageGallery([]);
      const data = await searchPhotos(inputValue);
      setImageGallery(data.results);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   if (searchQuery === "") return;
  // }, [searchQuery, currentPage]);

  return (
    <>
      <SearchBar onSearch={handleSearchSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {imageGallery.length > 0 && <ImageGallery imageGallery={imageGallery} />}
      <LoadMoreBtn />
    </>
  );
}

export default App;

// try {
//   setIsError(false);
//   setIsLoading(true);
//   setImageGallery([]);
//   const data = await searchPhotos(inputValue);
//   setImageGallery(data.results);
// } catch {
//   setIsError(true);
// } finally {
//   setIsLoading(false);
// }
