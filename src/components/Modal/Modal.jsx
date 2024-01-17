import { Component } from 'react';
import s from './Modal.module.css';

// largeImageURL, tags, closeModal, clickEscape

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal('');
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal('');
    }
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.handleClickBackdrop}>
        <div className={s.modal}>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}
