import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  { height = 24, width = 24, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    height={height}
    ref={ref}
    viewBox="0 0 24 24"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V11C8 12.0609 8.42143 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V11C14 11.5304 13.7893 12.0391 13.4142 12.4142C13.0391 12.7893 12.5304 13 12 13C11.4696 13 10.9609 12.7893 10.5858 12.4142C10.2107 12.0391 10 11.5304 10 11V6Z"
      fill="currentColor"/>
    <path
      d="M19 11C19 10.7348 18.8946 10.4804 18.7071 10.2929C18.5196 10.1054 18.2652 10 18 10C17.7348 10 17.4804 10.1054 17.2929 10.2929C17.1054 10.4804 17 10.7348 17 11C17 12.3261 16.4732 13.5979 15.5355 14.5355C14.5979 15.4732 13.3261 16 12 16C10.6739 16 9.40215 15.4732 8.46447 14.5355C7.52678 13.5979 7 12.3261 7 11C7 10.7348 6.89464 10.4804 6.70711 10.2929C6.51957 10.1054 6.26522 10 6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5.00197 12.6818 5.60941 14.3068 6.71118 15.5775C7.81295 16.8482 9.3354 17.6797 11 17.92V20H8.89C8.65396 20 8.42758 20.0938 8.26068 20.2607C8.09377 20.4276 8 20.654 8 20.89V21.11C8 21.346 8.09377 21.5724 8.26068 21.7393C8.42758 21.9062 8.65396 22 8.89 22H15.11C15.346 22 15.5724 21.9062 15.7393 21.7393C15.9062 21.5724 16 21.346 16 21.11V20.89C16 20.654 15.9062 20.4276 15.7393 20.2607C15.5724 20.0938 15.346 20 15.11 20H13V17.92C14.6646 17.6797 16.187 16.8482 17.2888 15.5775C18.3906 14.3068 18.998 12.6818 19 11Z"
      fill="currentColor"/>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
