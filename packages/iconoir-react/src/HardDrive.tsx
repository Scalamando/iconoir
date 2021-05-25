import * as React from 'react';

function SvgHardDrive(
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
        d="M10 17.01l.01-.011M6 17.01l.01-.011"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13v7.4a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V13M2 13h20M2 13l2.872-9.572A.6.6 0 015.446 3h13.108a.6.6 0 01.574.428L22 13"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgHardDrive);
export default ForwardRef;
