import type { LogosInterfaceProps } from '../LogosInterfaceProps';

export const FileIcon = ({ height, width, color, className }: LogosInterfaceProps) => {
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
          d='M12.03 7.67L11.36 5.81C11.3 5.63 11.12 5.5 10.92 5.5H4.97C4.71 5.5 4.5 5.71 4.5 5.97V17.5C4.5 18.54 5.35 19.39 6.39 19.39H18.33C19.37 19.39 20.22 18.54 20.22 17.5V9.88C20.22 8.84 19.37 7.99 18.33 7.99H12.48C12.28 7.99 12.1 7.86 12.03 7.67Z'
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
