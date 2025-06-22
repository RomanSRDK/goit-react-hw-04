import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

function ImageGallery({ imageGallery }) {
  return (
    <ul className={styles.gallery}>
      <ImageCard imageGallery={imageGallery} />
    </ul>
  );
}

export default ImageGallery;
