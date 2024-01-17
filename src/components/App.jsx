import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getAllPhotos } from 'Servises/Servises';
import s from './App.module.css';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoadMore: false,
    isLoading: false,
    largeImageURL: '',
    isModalClose: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.handleSetImages();
    }
  }

  handleSetImages = async () => {
    this.setState({ isLoading: true });
    try {
      const { page, query } = this.state;
      const data = await getAllPhotos(query, page);

      if (data) {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          isLoadMore: page < Math.ceil(data.totalHits / 20),
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState(() => ({ isLoading: false }));
    }
  };

  handleGetQuery = query => {
    this.setState({ query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleClickImage = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div className={s.App}>
        <Searchbar handleGetQuery={this.handleGetQuery} />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            handleClickImage={this.handleClickImage}
          />
        )}
        {isLoading && <Loader />}
        {this.state.isLoadMore && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}

        {this.state.largeImageURL && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            closeModal={this.handleClickImage}
          />
        )}
      </div>
    );
  }
}
