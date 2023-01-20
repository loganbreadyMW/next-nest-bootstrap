import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface LeftMainSlideOutSubNavigationProps {
  anchorSide: Anchor;
  navigationWidth: number | string;
}

export const LeftMainSlideOutSubNavigation = ({
  anchorSide,
  navigationWidth,
}: LeftMainSlideOutSubNavigationProps) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => {
    return (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : navigationWidth }}
        role='presentation'
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        Left Main Slide Out Sub Navigation Content
        <br />
        <button onClick={() => setState({ ...state, [anchor]: false })}>
          Close {anchor}-side Modal
        </button>
      </Box>
    );
  };

  return (
    <div>
      {([anchorSide] as const).map((anchor) => {
        return (
          <>
            <Button onClick={toggleDrawer(anchorSide, true)}>{anchorSide}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              hideBackdrop
            >
              {list(anchor)}
            </Drawer>
          </>
        );
      })}
    </div>
  );
};
