import styles from "./ImageGallery.module.css";

function ImageGallery({ imageGallery }) {
  return (
    <ul className={styles.gallery}>
      {imageGallery.map((image) => (
        <li key={image.id}>
          <img src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
