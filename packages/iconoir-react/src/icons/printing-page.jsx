import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const PrintingPage = forwardRef(
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
            d="M8 7V3.6C8 3.26863 8.26863 3 8.6 3H15.4C15.7314 3 16 3.26863 16 3.6V7M17.5714 18L17.9022 20.3151C17.9538 20.6766 17.6733 21 17.3082 21H6.69181C6.32668 21 6.0462 20.6766 6.09784 20.3151L6.42857 18M17.5714 18L17.0736 14.5151C17.0314 14.2196 16.7782 14 16.4796 14H7.52038C7.22179 14 6.96863 14.2196 6.92641 14.5151L6.42857 18M17.5714 18H20.4C20.7314 18 21 17.7314 21 17.4V11C21 8.79086 19.2091 7 17 7H7C4.79086 7 3 8.79086 3 11V17.4C3 17.7314 3.26863 18 3.6 18H6.42857"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M17 10.01L17.01 9.99889"
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

PrintingPage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PrintingPage.displayName = 'PrintingPage';

export default PrintingPage;
