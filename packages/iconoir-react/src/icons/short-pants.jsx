import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const ShortPants = forwardRef(
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
            d="M3.06014 5.65487C3.02786 5.30331 3.30459 5 3.65763 5H20.3424C20.6954 5 20.9721 5.30331 20.9399 5.65487L19.7643 18.4549C19.736 18.7637 19.477 19 19.1669 19H15.0152C14.7515 19 14.5187 18.8278 14.4415 18.5756L12.5737 12.4742C12.4005 11.9083 11.5995 11.9083 11.4263 12.4742L9.55848 18.5756C9.48129 18.8278 9.24848 19 8.98476 19H4.83314C4.52303 19 4.26401 18.7637 4.23565 18.4549L3.64286 12L3.06014 5.65487Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M4 9.5H5.5C6.60457 9.5 7.5 8.60457 7.5 7.5V5"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M20.5 9.5H18.5C17.3954 9.5 16.5 8.60457 16.5 7.5V5"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

ShortPants.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShortPants.displayName = 'ShortPants';

export default ShortPants;
