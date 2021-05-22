import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Gas = forwardRef(({ color = 'currentColor', size = 24 }, ref) => {
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
          d="M9 8C9 6.34315 10.3431 5 12 5V5C13.6569 5 15 6.34315 15 8V21.4C15 21.7314 14.7314 22 14.4 22H9.6C9.26863 22 9 21.7314 9 21.4V8Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M9 11H15"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M12 5V2M12 2H11M12 2H13"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </svg>
  );
});

Gas.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Gas.displayName = 'Gas';

export default Gas;
