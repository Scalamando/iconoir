import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Soap = forwardRef(({ color = 'currentColor', size = 24 }, ref) => {
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
          d="M7 11C7 8.79086 8.79086 7 11 7H13C15.2091 7 17 8.79086 17 11V20.4C17 20.7314 16.7314 21 16.4 21H7.6C7.26863 21 7 20.7314 7 20.4V11Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M7 13H17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M12 7V3M12 3H9M12 3H13"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </svg>
  );
});

Soap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Soap.displayName = 'Soap';

export default Soap;
