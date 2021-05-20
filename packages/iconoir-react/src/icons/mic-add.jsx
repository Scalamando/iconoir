import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const MicAdd = forwardRef(
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
            d="M16.9922 19H19.9922M22.9922 19H19.9922M19.9922 19V16M19.9922 19V22"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="5"
            y="2"
            width="6"
            height="12"
            rx="3"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M1 10V11C1 14.866 4.13401 18 8 18V18M15 10V11C15 14.866 11.866 18 8 18V18M8 18V22M8 22H5M8 22H11"
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

MicAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicAdd.displayName = 'MicAdd';

export default MicAdd;
