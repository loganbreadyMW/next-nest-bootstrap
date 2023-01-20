import { LeftMainNavigation } from '@molecules/LeftMainNavigation';
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
        <p>Home</p>
      </div>
    </>
  );
};

export default Home;
