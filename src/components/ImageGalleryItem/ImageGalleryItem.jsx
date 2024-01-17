import s from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  webformatURL,
  tags,
  handleClickImage,
  largeImageURL,
}) => {
  return (
    <li
      className={s.styleImageItem}
      onClick={() => handleClickImage(largeImageURL)}
    >
      <img src={webformatURL} alt={tags} className={s.styleImageItem} />
    </li>
  );
};
