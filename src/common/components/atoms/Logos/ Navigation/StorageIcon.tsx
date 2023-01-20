import type { LogosInterfaceProps } from '../LogosInterfaceProps';

export const StorageIcon = ({ height, width, color, className }: LogosInterfaceProps) => {
  return (
    <>
      {color == '#fff' && (
        <svg
          width={width}
          height={height}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect width={width} height={height} fill='black' />
          <path
            d='M19.93 9.66H4C3.72 9.66 3.5 9.44 3.5 9.16V6C3.5 5.72 3.72 5.5 4 5.5H19.93C20.21 5.5 20.43 5.72 20.43 6V9.16C20.43 9.43 20.2 9.66 19.93 9.66Z'
            stroke={color}
            stroke-width='1.2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M17.0898 19.42H6.83984C5.73984 19.42 4.83984 18.52 4.83984 17.42V9.66003H19.0998V17.43C19.0898 18.53 18.1998 19.42 17.0898 19.42Z'
            stroke={color}
            stroke-width='1.2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M9.85986 12.51H14.0699'
            stroke={color}
            stroke-width='1.2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      )}
      {color == '#000' && (
        <svg
          width={width}
          height={height}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect width={width} height={height} fill='white' />
          <path
            d='M19.93 9.66H4C3.72 9.66 3.5 9.44 3.5 9.16V6C3.5 5.72 3.72 5.5 4 5.5H19.93C20.21 5.5 20.43 5.72 20.43 6V9.16C20.43 9.43 20.2 9.66 19.93 9.66Z'
            stroke='black'
            stroke-width='1.2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M17.0898 19.42H6.83984C5.73984 19.42 4.83984 18.52 4.83984 17.42V9.66003H19.0998V17.43C19.0898 18.53 18.1998 19.42 17.0898 19.42Z'
            stroke='black'
            stroke-width='1.2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M9.85986 12.51H14.0699'
            stroke='black'
            stroke-width='1.2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      )}
    </>
  );
};
