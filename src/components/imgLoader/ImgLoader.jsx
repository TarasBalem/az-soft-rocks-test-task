import React from "react";

const ImgLoader = ({src, fallbackImg, alt, ...rest}) => {
  // якщо буде помилка, то підставляти fallback(дефолтне фото)
  const onError = ({target}) => (target.src = fallbackImg);

  return <img src={src} alt={alt} onError={onError} {...rest} />;
};

export default ImgLoader;
