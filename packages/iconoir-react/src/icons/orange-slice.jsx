import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const OrangeSlice = forwardRef(
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
            d="M10.6125 10.1109L18.3906 2.33275C22.6864 6.62852 22.6864 13.5933 18.3906 17.8891C14.0949 22.1849 7.13004 22.1849 2.83428 17.8891L10.6125 10.1109ZM10.6125 10.1109L10.2589 18.2427M10.6125 10.1109H18.3906M10.6125 10.1109L15.9158 15.4142"
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

OrangeSlice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OrangeSlice.displayName = 'OrangeSlice';

export default OrangeSlice;
