import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const PanoramaReduce = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 6.86208V17.1379C21 17.5558 20.5848 17.8501 20.1886 17.7171C18.5457 17.1656 14.7486 16 12 16C9.25138 16 5.45427 17.1656 3.81139 17.7171C3.41523 17.8501 3 17.5558 3 17.1379V6.86208C3 6.44418 3.41523 6.14988 3.81139 6.28288C5.45427 6.83441 9.25138 8 12 8C14.7486 8 18.5457 6.83441 20.1886 6.28288C20.5848 6.14988 21 6.44418 21 6.86208Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

PanoramaReduce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PanoramaReduce.displayName = 'PanoramaReduce';

export default PanoramaReduce;
