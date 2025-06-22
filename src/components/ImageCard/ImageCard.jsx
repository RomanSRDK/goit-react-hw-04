import styles from "./ImageCard.module.css";

function ImageCard({ imageGallery }) {
  return (
    <>
      {imageGallery.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className={styles.galleryImage}
          />
        </li>
      ))}
    </>
  );
}

export default ImageCard;
