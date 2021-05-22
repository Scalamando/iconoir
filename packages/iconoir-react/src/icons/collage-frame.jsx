import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const CollageFrame = forwardRef(
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
            d="M19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6V19.4C20 19.7314 19.7314 20 19.4 20Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path d="M11 12V4" stroke="currentColor" stroke-width="1.5" />
          <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" />
        </svg>
      </svg>
    );
  }
);

CollageFrame.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CollageFrame.displayName = 'CollageFrame';

export default CollageFrame;
