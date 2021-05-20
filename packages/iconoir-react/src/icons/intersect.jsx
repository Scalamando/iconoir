import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Intersect = forwardRef(
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
            d="M19.5 9H20.4C20.7314 9 21 9.26863 21 9.6V10.5M16.5 9H15H9.6C9.26863 9 9 9.26863 9 9.6V15V16.5M21 13.5V15V16.5M21 19.5V20.4C21 20.7314 20.7314 21 20.4 21H19.5M13.5 21H15H16.5M10.5 21H9.6C9.26863 21 9 20.7314 9 20.4V19.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 15H9H14.4C14.7314 15 15 14.7314 15 14.4V9V7.5M4.5 15H3.6C3.26863 15 3 14.7314 3 14.4V13.5M3 10.5V9V7.5M3 4.5V3.6C3 3.26863 3.26863 3 3.6 3H4.5M7.5 3H9H10.5M13.5 3H14.4C14.7314 3 15 3.26863 15 3.6V4.5"
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

Intersect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Intersect.displayName = 'Intersect';

export default Intersect;
