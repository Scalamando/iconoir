import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Treadmill = forwardRef(
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
            d="M13 6C14.1046 6 15 5.10457 15 4C15 2.89543 14.1046 2 13 2C11.8954 2 11 2.89543 11 4C11 5.10457 11.8954 6 13 6Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.41043 8.5075L7.79732 5.19931L10.6133 7.26692M10.6133 7.26692L13.508 10.5752H15.2297M10.6133 7.26692L7.30505 11.4022L11.4403 15.5374L9.37266 20.0861M6.89152 14.7103L5.65095 15.5374H2.34277"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8915 21.7103L18.651 19.5374M18.651 19.5374L3.34277 21.5374M18.651 19.5374V8M18.651 8L20.8915 6M18.651 8L17 9.5"
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

Treadmill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Treadmill.displayName = 'Treadmill';

export default Treadmill;
