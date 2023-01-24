import { DashboardGrid } from '@organisms/DashboardGrid';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100vw', padding: '10px' }}>
        <DashboardGrid />
      </div>
    </>
  );
};

export default Home;
