import { searchPhotos } from "./API";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imageGallery, setImageGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const handleSearchSubmit = (inputValue) => {
    setSearchQuery(inputValue);
    setCurrentPage(1);
    setImageGallery([]);
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (searchQuery === "") return;

    async function getPhotos() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await searchPhotos(searchQuery, currentPage);
        // console.log(data);
        setImageGallery((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, [searchQuery, currentPage]);

  const handleOpenModal = (imgInfo) => {
    // console.log(imgInfo);
    setModalImage(imgInfo);

    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const isLastPage = currentPage === totalPages;
  const hasImagesInGallery = imageGallery.length > 0;

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSearch={handleSearchSubmit} />

      {isError && (
        <ErrorMessage text={"Something went wrong, please try again"} />
      )}
      {hasImagesInGallery && (
        <ImageGallery imageGallery={imageGallery} openModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {hasImagesInGallery && !isLoading && !isLastPage && (
        <LoadMoreBtn tapOnBtn={incrementPage} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        modalImage={modalImage}
      />
    </>
  );
}

export default App;
