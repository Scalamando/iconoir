import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMicroscope(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M19 22H7m-2 0h2m0 0v-3M19 16h-9M16 2h-4M12 7c-3 0-5 1-5 4v2M16 4.6v6.8a.6.6 0 01-.6.6h-2.8a.6.6 0 01-.6-.6V4.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 19a3 3 0 110-6 3 3 0 010 6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMicroscope);
export default ForwardRef;
