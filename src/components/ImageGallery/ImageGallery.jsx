import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

function ImageGallery({ imageGallery, openModal }) {
  return (
    <ul className={styles.gallery}>
      {imageGallery.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
