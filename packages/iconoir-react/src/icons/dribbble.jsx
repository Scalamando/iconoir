import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Dribbble = forwardRef(
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
            d="M16.6726 20.8434C15.2781 21.5818 13.6879 22 12 22C9.38934 22 7.01233 20.9996 5.23143 19.3612M16.6726 20.8434C19.616 19.285 21.6879 16.3002 21.9677 12.8099M16.6726 20.8434C15.5 14 12.5 8 8.5 2.62961M2.06649 10.8406C2.02257 11.221 2 11.6079 2 12C2 14.9122 3.24484 17.5336 5.23143 19.3612M2.06649 10.8406C6 11 15.2829 10.5 19.1414 5M2.06649 10.8406C2.50317 7.05828 5.05026 3.9187 8.5 2.62961M19.1414 5C17.3265 3.14864 14.7974 2 12 2C10.7687 2 9.58934 2.22255 8.5 2.62961M19.1414 5C20.9097 6.80375 22 9.27455 22 12C22 12.2727 21.9891 12.5428 21.9677 12.8099M21.9677 12.8099C15.3438 10.8406 7.5 14 5.23143 19.3612"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

Dribbble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Dribbble.displayName = 'Dribbble';

export default Dribbble;
