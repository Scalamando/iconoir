import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const MailOpened = forwardRef(
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
            d="M7 12L12 15.5L17 12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 20V9.13238C2 8.42985 2.3686 7.77884 2.97101 7.41739L10.971 2.61739C11.6044 2.23738 12.3956 2.23738 13.029 2.6174L21.029 7.4174C21.6314 7.77884 22 8.42985 22 9.13238V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

MailOpened.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MailOpened.displayName = 'MailOpened';

export default MailOpened;
