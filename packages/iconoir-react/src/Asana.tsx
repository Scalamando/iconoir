import * as React from 'react';

function SvgAsana(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M12 11.5a4 4 0 100-8 4 4 0 000 8zM7 20.5a4 4 0 100-8 4 4 0 000 8zM17 20.5a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgAsana);
export default ForwardRef;
