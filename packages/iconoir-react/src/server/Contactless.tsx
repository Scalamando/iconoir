import * as React from "react";
function SvgContactless(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M15 21.5c4-5.5 4-13.5 0-19M11.5 20c3.5-5 3.5-11 0-16M8.5 18c2.667-3.75 2.667-8.25 0-12M5.5 16c1.5-2.5 1.5-5.5 0-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgContactless);
export default ForwardRef;
