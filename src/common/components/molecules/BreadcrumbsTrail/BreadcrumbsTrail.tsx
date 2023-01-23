import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import { ChevronRight } from './ChevronRight';

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
      <Breadcrumbs separator={<ChevronRight />} aria-label='breadcrumb'>
        <Link underline='hover' key='1' color='inherit' href='/'>
          Home
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
