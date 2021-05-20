import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const CloudSync = forwardRef(
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
            d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.57974 19.4874L9.34751 21.2552C10.9096 22.8173 13.4423 22.8173 15.0044 21.2552L15.3579 20.9016M7.57974 19.4874L7.93329 21.9623L10.0546 19.841L7.57974 19.4874Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.4203 17.0126L17.1627 16.9065C17.1961 17.1402 17.1175 17.376 16.9506 17.5429C16.7837 17.7098 16.5479 17.7884 16.3142 17.755L16.4203 17.0126ZM16.0667 14.5377L15.5364 14.0074C15.7373 13.8065 16.0344 13.7363 16.3039 13.8262C16.5734 13.916 16.769 14.1504 16.8092 14.4316L16.0667 14.5377ZM13.9454 16.659L13.8393 17.4015C13.5581 17.3613 13.3237 17.1657 13.2339 16.8962C13.144 16.6267 13.2142 16.3296 13.4151 16.1287L13.9454 16.659ZM9.17242 16.1287C8.87952 16.4216 8.40465 16.4216 8.11176 16.1287C7.81886 15.8358 7.81886 15.3609 8.11176 15.068L9.17242 16.1287ZM15.1828 14.7145L16.9506 16.4822L15.8899 17.5429L14.1222 15.7751L15.1828 14.7145ZM15.6778 17.1186L15.3242 14.6438L16.8092 14.4316L17.1627 16.9065L15.6778 17.1186ZM16.3142 17.755L13.8393 17.4015L14.0515 15.9166L16.5263 16.2701L16.3142 17.755ZM9.52597 15.7751L9.17242 16.1287L8.11176 15.068L8.46531 14.7145L9.52597 15.7751ZM16.597 15.068L14.4757 17.1893L13.4151 16.1287L15.5364 14.0074L16.597 15.068ZM14.1222 15.7751C12.853 14.5059 10.7952 14.5059 9.52597 15.7751L8.46531 14.7145C10.3203 12.8595 13.3278 12.8595 15.1828 14.7145L14.1222 15.7751Z"
            fill="currentColor"
          />
        </svg>
      </svg>
    );
  }
);

CloudSync.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudSync.displayName = 'CloudSync';

export default CloudSync;
