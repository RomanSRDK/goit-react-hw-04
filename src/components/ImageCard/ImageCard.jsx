import styles from "./ImageCard.module.css";

function ImageCard({ image, openModal }) {
  return (
    <div>
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
    </div>
  );
}

export default ImageCard;
