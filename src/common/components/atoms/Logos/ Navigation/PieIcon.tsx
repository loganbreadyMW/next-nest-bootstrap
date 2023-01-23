import type { LogosInterfaceProps } from '../LogosInterfaceProps';

export const PieIcon = ({ width, height, color, className }: LogosInterfaceProps) => {
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
        <path
          d='M10.5201 5.00995C6.1401 5.00995 2.6001 8.55995 2.6001 12.9299C2.6001 17.3099 6.1501 20.8499 10.5201 20.8499C14.9001 20.8499 18.4401 17.2999 18.4401 12.9299H10.5201V5.00995Z'
          stroke={color}
          strokeWidth='1.2'
          stroke-miterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.8701 2.59998C17.2501 2.59998 20.7901 6.14998 20.7901 10.52H12.8701V2.59998Z'
          stroke={color}
          strokeWidth='1.2'
          stroke-miterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  );
};
