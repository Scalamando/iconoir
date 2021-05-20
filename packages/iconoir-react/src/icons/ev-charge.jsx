import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const EvCharge = forwardRef(
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
            d="M6 9V19C6 20.1046 6.89543 21 8 21H17C18.1046 21 19 20.1046 19 19V14M6 9H7C8.10457 9 9 8.10457 9 7V6C9 5.44772 8.55228 5 8 5V5M6 9H5C3.89543 9 3 8.10457 3 7V6C3 5.44772 3.44772 5 4 5V5M4 5H6H8M4 5V3M8 5V3"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M18.1667 4L16.5 7H20.5L18.8333 10"
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

EvCharge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EvCharge.displayName = 'EvCharge';

export default EvCharge;
