import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const EyeOff = forwardRef(
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
            d="M3 3L21 21"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 10.6771C10.1888 11.0296 10 11.4928 10 12C10 13.1045 10.8954 14 12 14C12.5072 14 12.9703 13.8112 13.3229 13.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6C16.0084 6 18.7015 9.1582 21 12C20.6816 12.5043 20.3203 13.0092 19.922 13.5M7.36185 7.56107C5.68002 8.73966 4.27894 10.4188 3 12C4.88856 14.991 8.2817 18 12 18C13.5499 18 15.0434 17.4772 16.3949 16.6508"
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

EyeOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeOff.displayName = 'EyeOff';

export default EyeOff;
