import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Gym = forwardRef(({ color = 'currentColor', size = 24 }, ref) => {
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
          d="M4 15H1.6C1.26863 15 1 14.7314 1 14.4V9.6C1 9.26863 1.26863 9 1.6 9H4M4 15V16.4C4 16.7314 4.26863 17 4.6 17H7.4C7.73137 17 8 16.7314 8 16.4V12M4 15V9M4 9V7.6C4 7.26863 4.26863 7 4.6 7H7.4C7.73137 7 8 7.26863 8 7.6V12M8 12H16M20 15H22.4C22.7314 15 23 14.7314 23 14.4V9.6C23 9.26863 22.7314 9 22.4 9H20M20 15V16.4C20 16.7314 19.7314 17 19.4 17H16.6C16.2686 17 16 16.7314 16 16.4V12M20 15V9M20 9V7.6C20 7.26863 19.7314 7 19.4 7H16.6C16.2686 7 16 7.26863 16 7.6V12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
});

Gym.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Gym.displayName = 'Gym';

export default Gym;
