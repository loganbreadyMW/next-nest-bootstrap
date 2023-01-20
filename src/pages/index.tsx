import { LeftMainNavigation } from '@molecules/LeftMainNavigation';
import { LeftMainSlideOutSubNavigation } from '@molecules/LeftMainSlideOutSubNavigation';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }}>
        <LeftMainNavigation
          anchorSide='left'
          navigationWidth={80}
          desktopBackgroundColor='#000'
          mobileBackgroundColor='#fff'
        />
        <LeftMainSlideOutSubNavigation anchorSide='right' navigationWidth={'100vw'} />
        <p>Home</p>
      </div>
    </>
  );
};

export default Home;
