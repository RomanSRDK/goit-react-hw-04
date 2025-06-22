import styles from "./ImageCard.module.css";

function ImageCard({ imageGallery, openModal }) {
  return (
    <>
      {imageGallery.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className={styles.galleryImage}
            onClick={() =>
              openModal({
                image: image.urls.regular,
                // description: image.description,
                // likes: image.likes,
                // author: image.user.name,
              })
            }
          />
        </li>
      ))}
    </>
  );
}

export default ImageCard;
