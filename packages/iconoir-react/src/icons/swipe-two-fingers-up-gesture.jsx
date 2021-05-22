import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SwipeTwoFingersUpGesture = forwardRef(
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
            d="M6.5 12C4.567 12 3 13.567 3 15.5C3 17.433 4.567 19 6.5 19C8.433 19 10 17.433 10 15.5C10 13.567 8.433 12 6.5 12ZM6.5 12V5M6.5 5L9 7.4M6.5 5L4 7.4"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 12C15.567 12 14 13.567 14 15.5C14 17.433 15.567 19 17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12ZM17.5 12V5M17.5 5L20 7.4M17.5 5L15 7.4"
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

SwipeTwoFingersUpGesture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SwipeTwoFingersUpGesture.displayName = 'SwipeTwoFingersUpGesture';

export default SwipeTwoFingersUpGesture;
