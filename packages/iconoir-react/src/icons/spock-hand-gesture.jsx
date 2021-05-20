import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SpockHandGesture = forwardRef(
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
            d="M9 5L8.20966 5.13172C7.03189 5.32802 6.28739 6.50588 6.61542 7.65395L7.97691 12.4192C7.99223 12.4728 8 12.5283 8 12.584V16L5.74526 13.4231C5.09624 12.6814 3.93438 12.707 3.31868 13.4767V13.4767C2.84375 14.0703 2.85811 14.9178 3.35288 15.495L7.90136 20.8016C8.28132 21.2449 8.83594 21.5 9.41979 21.5C11.0119 21.5 14.1259 21.5 16 21.5C18.4 21.5 20 19.5 20 17.5C20 17.5 20 17.5 20 17.5C20 17.5 20 15.1904 20 12.5661C20 12.5223 20.0048 12.4784 20.0143 12.4357L20.5423 10.0598C20.791 8.94046 20.0497 7.84162 18.9187 7.65312L18 7.5M9 5L11 12.5M9 5L8.9005 4.60201C8.68468 3.7387 9.25108 2.87482 10.1288 2.72853V2.72853C10.9057 2.59905 11.6533 3.08265 11.8538 3.8443L14 12L15.2226 5.47955C15.3767 4.65763 16.16 4.11 16.9848 4.24747V4.24747C17.8216 4.38694 18.3869 5.17836 18.2475 6.01515L18 7.5M17 12.5L18 7.5"
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

SpockHandGesture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SpockHandGesture.displayName = 'SpockHandGesture';

export default SpockHandGesture;
