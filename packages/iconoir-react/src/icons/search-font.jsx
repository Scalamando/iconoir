import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SearchFont = forwardRef(
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
            d="M9 5H3V7M9 5L15 5V7M9 5V17M9 17H7M9 17H11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.5 19.5L21 21"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 17C14 18.6569 15.3431 20 17 20C17.8299 20 18.581 19.663 19.1241 19.1185C19.6654 18.5758 20 17.827 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17Z"
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

SearchFont.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchFont.displayName = 'SearchFont';

export default SearchFont;
