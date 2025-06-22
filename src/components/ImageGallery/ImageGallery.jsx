import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

function ImageGallery({ imageGallery, openModal }) {
  return (
    <ul className={styles.gallery}>
      <ImageCard imageGallery={imageGallery} openModal={openModal} />
    </ul>
  );
}

export default ImageGallery;
