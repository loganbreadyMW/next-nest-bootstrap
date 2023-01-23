import type { LogosInterfaceProps } from '../LogosInterfaceProps';

export const HomeIcon = ({ height, width, color, className }: LogosInterfaceProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <g clip-path='url(#clip0_5458_414069)'>
          <path
            d='M22.1699 10.76L13.3699 3.10998C12.5899 2.42998 11.4299 2.42998 10.6499 3.10998L1.84986 10.76C1.32986 11.21 1.64986 12.07 2.33986 12.07H4.93986V19.57C4.93986 20.71 5.86986 21.64 7.00986 21.64H9.49986V15.84C9.49986 15.29 9.94986 14.84 10.4999 14.84H13.4999C14.0499 14.84 14.4999 15.29 14.4999 15.84V21.64H16.9899C18.1299 21.64 19.0599 20.71 19.0599 19.57V12.07H21.6599C22.3699 12.06 22.6899 11.21 22.1699 10.76Z'
            fill={color}
            stroke={color}
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_5458_414069'>
            <rect width='22.03' height='20.23' fill={color} transform='translate(1 2)' />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
