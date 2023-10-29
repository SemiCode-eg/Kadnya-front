/* eslint-disable react/prop-types */

import { useRef } from 'react';
import MainButton from '../mainButton/MainButton';

function ImageSelectBtn({ handleChange }) {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <MainButton
        text="Select Image"
        className="text-teal-500 text-[17px] font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
        handleClick={handleClick}
        isPrimary={false}
      />
      <input
        id="image"
        type="file"
        name="upload-image"
        ref={hiddenFileInput}
        onChange={handleChange}
        className="w-0 h-0 "
      />
    </>
  );
}

export default ImageSelectBtn;
