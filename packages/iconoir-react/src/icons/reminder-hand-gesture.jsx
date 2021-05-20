import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const ReminderHandGesture = forwardRef(
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
            d="M17.5 12V3.5C17.5 2.67157 16.8284 2 16 2V2C15.1716 2 14.5 2.67056 14.5 3.49899C14.5 4.68968 14.5 6.34156 14.5 7.5M17.5 12V15M17.5 12L19.5041 14.6721C20.0815 15.4421 20.0287 16.5141 19.3784 17.2236L15.5945 21.3514C15.2157 21.7647 14.6817 22 14.1211 22C13.0349 22 11.2585 22 9.5 22C7.14159 22 5.87758 19.425 5.51817 18.0705C5.50559 18.0231 5.5 17.9763 5.5 17.9272C5.5 17.1882 5.5 11.039 5.5 9.42857C5.5 7.14286 8.5 7.14286 8.5 9.42857M14.5 10C14.5 10 14.5 8.61578 14.5 7.5M14.5 7.5C14.5 5.21429 11.5 5.21429 11.5 7.5C11.5 7.5 11.5 7.5 11.5 7.5C11.5 7.5 11.5 8.06256 11.5 8.28571M11.5 10C11.5 10 11.5 9.17834 11.5 8.28571M8.5 10C8.5 10 8.5 9.87489 8.5 9.42857M8.5 9.42857C8.5 9.20541 8.5 8.50887 8.5 8.28571C8.5 6 11.5 6 11.5 8.28571"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5625 6.5H19.625C20.5 6.5 21 6.07843 21 5.25C21 4.42157 20.5 4 19.625 4H17.5625H14.4375H12.25C11.5596 4 11 4.55964 11 5.25V5.5C11 6.05228 11.4477 6.5 12 6.5V6.5"
            stroke="black"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

ReminderHandGesture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ReminderHandGesture.displayName = 'ReminderHandGesture';

export default ReminderHandGesture;
