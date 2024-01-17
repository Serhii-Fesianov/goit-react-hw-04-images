import { FidgetSpinner } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loaderStyleWrapper}>
      <FidgetSpinner
        visible={true}
        height="150"
        width="150"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
    </div>
  );
};
