import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const ShieldAlt = forwardRef(
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
            d="M3.57143 8C3.39038 6.73263 3.23403 5.63823 3.13088 4.91614C3.05698 4.39885 3.39389 3.91247 3.90398 3.79912L11.5661 2.09641C11.8519 2.03291 12.1481 2.03291 12.4339 2.09641L20.096 3.79912C20.6061 3.91247 20.943 4.39885 20.8691 4.91614C20.766 5.63823 20.6096 6.73263 20.4286 8M3.57143 8H20.4286M3.57143 8C3.87997 10.1598 4.26028 12.822 4.57143 15M20.4286 8C20.12 10.1598 19.7397 12.822 19.4286 15M19.4286 15C19.2567 16.2032 19.1059 17.2586 19 18C18.9293 18.495 18.5 21.5 12 21.5C5.5 21.5 5.07071 18.495 5 18C4.89409 17.2586 4.74331 16.2032 4.57143 15M19.4286 15H4.57143"
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

ShieldAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldAlt.displayName = 'ShieldAlt';

export default ShieldAlt;
