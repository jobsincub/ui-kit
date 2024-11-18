import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  { height = 36, width = 36, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={height}
    ref={ref}
    viewBox="0 0 24 24"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M19 12V11.988M4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
