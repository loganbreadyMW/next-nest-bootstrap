import { LeftMainNavigation } from '@molecules/LeftMainNavigation';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }}>
        <LeftMainNavigation />
        <p>Home</p>
      </div>
    </>
  );
};

export default Home;
