import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getAllPhotos } from 'Servises/Servises';
import s from './App.module.css';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    try {
      (async () => {
        const { totalHits, hits } = await getAllPhotos(query, page);
        if (hits && totalHits) {
          setImages(prevImages => [...prevImages, ...hits]);
          setIsLoadMore(page < Math.ceil(totalHits / 20));
        }
      })();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  const handleGetQuery = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleClickImage = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setLargeImageURL('');
  };

  return (
    <div className={s.App}>
      <Searchbar handleGetQuery={handleGetQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} handleClickImage={handleClickImage} />
      )}
      {isLoading && <Loader />}
      {isLoadMore && <Button handleLoadMore={handleLoadMore} />}

      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} closeModal={closeModal} />
      )}
    </div>
  );
};
