import React from 'react';
import s from './Button.module.css';

export const Button = ({ handleLoadMore }) => {
  return (
    <div>
      <button type="submit" className={s.Button} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};
