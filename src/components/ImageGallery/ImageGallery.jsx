import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
export const ImageGallery = ({ images, handleClickImage, largeImageURL }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
          handleClickImage={handleClickImage}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};
