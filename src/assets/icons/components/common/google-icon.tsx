import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  { height = 24, width = 24, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'none'}
    height={height}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={width}
    xmlns={'http://www.w3.org/2000/svg'}
    {...rest}
  >
    <g clipPath={'url(#clip0_301_5864'}>
      <path
        d={
          'M5.2662 9.76453C6.19879 6.93863 8.85445 4.90909 12 4.90909C13.6909 4.90909 15.2182 5.50909 16.4182 6.49091L19.9091 3C17.7818 1.14545 15.0545 0 12 0C7.27007 0 3.19775 2.6983 1.23999 6.65002L5.2662 9.76453Z'
        }
        fill={'#EA4335'}
      />
      <path
        d={
          'M16.0407 18.0126C14.9509 18.7163 13.5661 19.0909 12 19.0909C8.86648 19.0909 6.21911 17.0769 5.27698 14.2679L1.23746 17.335C3.19279 21.2936 7.265 24 12 24C14.9328 24 17.7353 22.9574 19.8342 20.9996L16.0407 18.0126Z'
        }
        fill={'#34A853'}
      />
      <path
        d={
          'M19.8342 20.9996C22.0292 18.9521 23.4545 15.9037 23.4545 12C23.4545 11.2909 23.3455 10.5273 23.1818 9.81818H12V14.4545H18.4364C18.1188 16.0136 17.2663 17.2212 16.0407 18.0126L19.8342 20.9996Z'
        }
        fill={'#4A90E2'}
      />
      <path
        d={
          'M5.27698 14.2679C5.03833 13.5563 4.90909 12.7938 4.90909 12C4.90909 11.2183 5.03444 10.4668 5.2662 9.76453L1.23999 6.65002C0.436587 8.26043 0 10.0754 0 12C0 13.9195 0.444781 15.7302 1.23746 17.335L5.27698 14.2679Z'
        }
        fill={'#FBBC05'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_301_5864'}>
        <rect fill={'white'} height={'24'} width={'24'} />
      </clipPath>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
