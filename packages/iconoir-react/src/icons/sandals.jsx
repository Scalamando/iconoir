import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Sandals = forwardRef(
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
            d="M22 7C22 7 22.5001 3 18 3C13.4999 3 14 7 14 7M22 7H14M22 7L21.7857 10M14 7L14.2143 10M21.7857 10L21.199 18.2137C21.0869 19.7837 19.7806 21 18.2067 21H17.7934C16.2195 21 14.9131 19.7837 14.801 18.2137L14.2143 10M21.7857 10H14.2143"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0001 7C10.0001 7 10.5001 3 6.00007 3C1.5 3 2.00007 7 2.00007 7M10.0001 7H2.00007M10.0001 7L9.78579 10M2.00007 7L2.21436 10M9.78579 10L9.19909 18.2137C9.08695 19.7837 7.78063 21 6.20671 21H5.79343C4.21951 21 2.91319 19.7837 2.80105 18.2137L2.21436 10M9.78579 10H2.21436"
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

Sandals.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Sandals.displayName = 'Sandals';

export default Sandals;
