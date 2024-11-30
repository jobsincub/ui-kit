import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  { height = 34, width = 20, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    height={height}
    ref={ref}
    viewBox="0 0 20 34"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M16 0.5H4C1.93 0.5 0.25 2.18 0.25 4.25V29.75C0.25 31.82 1.93 33.5 4 33.5H16C18.07 33.5 19.75 31.82 19.75 29.75V4.25C19.75 2.18 18.07 0.5 16 0.5ZM10 32C8.755 32 7.75 30.995 7.75 29.75C7.75 28.505 8.755 27.5 10 27.5C11.245 27.5 12.25 28.505 12.25 29.75C12.25 30.995 11.245 32 10 32ZM16.75 26H3.25V5H16.75V26Z"
      fill="white"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
