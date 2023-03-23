import { createElement, forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import { PropTypes } from 'prop-types';

const TextStyles = (fontWeight, fontSize, lineHeight) => css`
  font-weight: ${fontWeight || 700};
  font-size: ${fontSize || '200px'};
  line-height: ${lineHeight || '25px'};
`;

const Text = forwardRef((props, ref) => {
  const { component, fontWeight, fontSize, lineHeight, className, ...otherProps } = props;
  const element = createElement(component, {
    ...otherProps,
    ref,
    className: cx(TextStyles(fontWeight, fontSize, lineHeight), className),
  });
  return element;
});

Text.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h5', 'h6', 'span', 'textarea', 'p']),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.string,
};

Text.defaultProps = {
  component: 'p',
};

export default Text;
