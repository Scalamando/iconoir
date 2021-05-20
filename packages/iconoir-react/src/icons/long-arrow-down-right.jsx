import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const LongArrowDownRight = forwardRef(
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
            d="M16.75 15.75H10.75C8.54086 15.75 6.75 13.9591 6.75 11.75V4.75M16.75 15.75L13.25 19.25M16.75 15.75L13.25 12.25"
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

LongArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LongArrowDownRight.displayName = 'LongArrowDownRight';

export default LongArrowDownRight;
