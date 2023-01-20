import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { ChevronRight } from './ChevronRight';

interface BreadcrumbsTrailProps {
  something?: string;
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const BreadcrumbsTrail = ({ something }: BreadcrumbsTrailProps) => {
  const router = useRouter();

  const breadcrumbs = [
    <Link underline='hover' key='1' color='inherit' href='/' onClick={handleClick}>
      MUI
    </Link>,
    <Link
      underline='hover'
      key='2'
      color='inherit'
      href='/material-ui/getting-started/installation/'
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key='3' color='text.primary'>
      Breadcrumb
    </Typography>,
  ];
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<ChevronRight />} aria-label='breadcrumb'>
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};
