import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import styles from './BreadcrumbsTrail.module.scss';
import { ChevronRight } from './ChevronRight';
import { HomeIcon } from './HomeIcon';

interface BreadcrumbsTrailProps {
  something?: string;
}

export const BreadcrumbsTrail = ({ something }: BreadcrumbsTrailProps) => {
  const router = useRouter();
  const pathname = router.pathname
    .split('/')
    .filter((x) => x)
    .map((x) => x.replace(/[^a-zA-Z0-9]/g, ' '));
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<ChevronRight />}
        aria-label='breadcrumb'
        sx={{
          '& .MuiBreadcrumbs-li': {
            '&:last-of-type': {
              backgroundColor: '#f2f4f7',
              padding: '4px 8px',
            },
          },
        }}
      >
        <Link underline='hover' key='1' color='inherit' href='/'>
          <HomeIcon className={styles['home-icon']} />
        </Link>
        {pathname.map((x) => {
          return (
            <Link underline='hover' key={x} color='inherit' href={`/${x}`}>
              {x}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
};
