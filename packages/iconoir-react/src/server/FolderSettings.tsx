import * as React from "react";
function SvgFolderSettings(
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
        d="M2.6 4h6.178a.6.6 0 01.39.144l3.164 2.712a.6.6 0 00.39.144H21.4a.6.6 0 01.6.6v2.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6V4.6a.6.6 0 01.6-.6zM22 10v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10v9.4a.6.6 0 00.6.6H13M19 21a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 22a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0.3 2"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFolderSettings);
export default ForwardRef;
