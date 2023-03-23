import { forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import { PropTypes } from 'prop-types';

const MediaImgStyles = (width, height, borderRadius) => css`
  width: ${width || "100px"};
  height: ${height || "100px"};
  border-radius: ${borderRadius || "16px"};
`

const MediaImg = forwardRef((props, ref) => {
  const { className, src, alt, borderRadius, width, height, ...otherProps} = props
  return <img src={src} alt={alt} ref={ref} {...otherProps} className={ cx(MediaImgStyles(width, height, borderRadius), className) } />;
});

MediaImg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
}

export default MediaImg;
