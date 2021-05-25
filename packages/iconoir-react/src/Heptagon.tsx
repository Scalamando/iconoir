import * as React from 'react';

function SvgHeptagon(
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
        d="M11.74 1.625a.6.6 0 01.52 0l8.08 3.891a.6.6 0 01.324.407l1.996 8.743a.6.6 0 01-.116.508l-5.591 7.01a.6.6 0 01-.47.227H7.517a.6.6 0 01-.469-.226l-5.591-7.011a.6.6 0 01-.116-.508l1.996-8.743a.6.6 0 01.324-.407l8.08-3.89z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgHeptagon);
export default ForwardRef;
