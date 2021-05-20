import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const TennisBallAlt = forwardRef(
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
            d="M21.46 15.2419C22.3628 12.6039 22.1638 9.6043 20.6602 6.99993C19.1566 4.39556 16.6584 2.72343 13.9223 2.1863M21.46 15.2419C20.7048 17.4486 19.1785 19.4024 17 20.6602C14.8214 21.918 12.3663 22.2629 10.0776 21.8136M21.46 15.2419C16.474 11.9395 13.8776 7.44222 13.9223 2.1863M10.0776 21.8136C7.34155 21.2764 4.84334 19.6043 3.33971 16.9999C0.57828 12.217 2.21703 6.1011 6.99996 3.33968C9.17852 2.08188 11.6336 1.73699 13.9223 2.1863M10.0776 21.8136C9.71062 15.8444 7.11403 11.3472 2.53992 8.75794"
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

TennisBallAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TennisBallAlt.displayName = 'TennisBallAlt';

export default TennisBallAlt;
