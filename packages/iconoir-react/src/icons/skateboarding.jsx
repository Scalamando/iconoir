import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Skateboarding = forwardRef(
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
            d="M5 19L7.33333 20L16.6667 20L19 19"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 22.01L8.01 21.9989"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 22.01L16.01 21.9989"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 7.8335C7 7.8335 8.82843 6.91929 10 6.3335C12 5.3335 14.2705 6.90111 14.2705 6.90111L9.96227 10.0363L14 13.3335V17.3335M15.1652 9.20936H17.887M9.54875 13.3445L8.30818 14.1716H5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 6C18.1046 6 19 5.10457 19 4C19 2.89543 18.1046 2 17 2C15.8954 2 15 2.89543 15 4C15 5.10457 15.8954 6 17 6Z"
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

Skateboarding.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Skateboarding.displayName = 'Skateboarding';

export default Skateboarding;
