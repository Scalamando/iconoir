import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const FrameTool = forwardRef(
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
            d="M2 7H3M2 17H3M21 7H22M21 17H22M17 3V2M7 3V2M17 22V21M7 22V21M18 6.6V17.4C18 17.7314 17.7314 18 17.4 18H6.6C6.26863 18 6 17.7314 6 17.4V6.6C6 6.26863 6.26863 6 6.6 6H17.4C17.7314 6 18 6.26863 18 6.6Z"
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

FrameTool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FrameTool.displayName = 'FrameTool';

export default FrameTool;
