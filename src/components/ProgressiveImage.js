import { useState, useRef } from 'react';

const ProgressiveImage = (props) => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <img
        {...props}
        onLoad={() => {
          setHighResImageLoaded(true);
        }}
        ref={ref}
        src={props.src}
        alt=''
      />
      <img
        {...props}
        style={{
          position: 'absolute',
          filter: 'blur(1px)',
          clipPath: 'inset(0)',
          ...(!highResImageLoaded && { transition: 'opacity ease-in 500ms' }),
          ...(highResImageLoaded && { opacity: 0 }),
        }}
        src={props.placeholderSrc}
        alt=''
      />
      <p className='p p--caption'>{props.caption}</p>
    </>
  );
};

export default ProgressiveImage;
