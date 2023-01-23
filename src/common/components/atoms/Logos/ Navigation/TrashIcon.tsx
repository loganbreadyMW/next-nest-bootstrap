import type { LogosInterfaceProps } from '../LogosInterfaceProps';

export const TrashIcon = ({ height, width, color, className }: LogosInterfaceProps) => {
  return (
    <>
      {color === '#fff' && (
        <svg
          width={width}
          height={height}
          className={className}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width={width} height={height} fill='black' />
          <path
            d='M16.5301 21.13H7.06006C5.96006 21.13 5.06006 20.23 5.06006 19.13V5.60999H18.5301V19.13C18.5301 20.23 17.6301 21.13 16.5301 21.13Z'
            stroke='#fff'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2.6001 5.60999H20.9901'
            stroke='#fff'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M14.56 5.60998V3.59998C14.56 3.04998 14.11 2.59998 13.56 2.59998H10.02C9.47002 2.59998 9.02002 3.04998 9.02002 3.59998V5.60998'
            stroke='#fff'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.68018 8.84003V16.8'
            stroke='#fff'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M13.9004 8.84003V16.8'
            stroke='#fff'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
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
            d='M16.5301 21.13H7.06006C5.96006 21.13 5.06006 20.23 5.06006 19.13V5.61H18.5301V19.13C18.5301 20.23 17.6301 21.13 16.5301 21.13Z'
            stroke='black'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2.6001 5.61H20.9901'
            stroke='black'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M14.56 5.61001V3.60001C14.56 3.05001 14.11 2.60001 13.56 2.60001H10.02C9.47002 2.60001 9.02002 3.05001 9.02002 3.60001V5.61001'
            stroke='black'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.68018 8.84V16.8'
            stroke='black'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M13.9004 8.84V16.8'
            stroke='black'
            strokeWidth='1.2'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </>
  );
};
