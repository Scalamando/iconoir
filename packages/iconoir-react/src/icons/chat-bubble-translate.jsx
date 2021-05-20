import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const ChatBubbleTranslate = forwardRef(
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
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 8.51724H12M17 8.51724H15.2143M12 8.51724H15.2143M12 8.51724V7M15.2143 8.51724C14.6282 10.5922 13.4009 12.5536 12 14.2773M8.42857 18C9.561 16.9691 10.84 15.7047 12 14.2773M12 14.2773C11.2857 13.4483 10.2857 12.1069 10 11.5M12 14.2773L14.1429 16.4828"
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

ChatBubbleTranslate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChatBubbleTranslate.displayName = 'ChatBubbleTranslate';

export default ChatBubbleTranslate;
