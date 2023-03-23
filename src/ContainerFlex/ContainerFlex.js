import { forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import { PropTypes } from 'prop-types';

const ContainerFlexStyles = (
  width,
  heigth,
  bgColor,
  flexDirection,
  alignContent,
  alignItems,
  justifyContent,
  gap
) => css`
  width: ${width || '100%'};
  height: ${heigth || '100%'};
  display: flex;
  background-color: ${bgColor};
  flex-direction: ${flexDirection};
  align-content: ${alignContent};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  gap: ${gap};
`;

const ContainerFlex = forwardRef((props, ref) => {
  const {
    className,
    width,
    heigth,
    bgColor,
    flexDirection,
    alignContent,
    alignItems,
    justifyContent,
    gap,
    ...otherProps
  } = props;

  return (
    <section
      ref={ref}
      {...otherProps}
      className={cx(
        ContainerFlexStyles(
          width,
          heigth,
          bgColor,
          flexDirection,
          alignContent,
          alignItems,
          justifyContent,
          gap
        ),
        className
      )}
    ></section>
  );
});

ContainerFlex.propTypes = {
  width: PropTypes.string,
  heigth: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  gap: PropTypes.string,
  flexDirection: PropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]),
  alignContent: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-arround',
    'space-between',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stetch']),
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-arround',
    'space-between',
    'stretch',
  ]),
};

export default ContainerFlex;
