import { MwiLogo } from '@atoms/Logos/ Navigation/MwiLogo';
import { useWindowSize } from '@hooks/useWindowSize';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './LeftMainNavigation.module.scss';
import { NavigationIcons } from './NavigationIcons';

export const LeftMainNavigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();

  const drawerWidth = 80;
  useEffect(() => {
    if (size?.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: isMobile ? '#fff' : '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRight: 'none',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Link href='/'>
          <MwiLogo
            color={isMobile ? '#000' : '#fff'}
            width='39'
            height='43'
            className={styles['mwi-logo']}
          />
        </Link>
        <NavigationIcons />
      </Drawer>
    </Box>
  );
};
