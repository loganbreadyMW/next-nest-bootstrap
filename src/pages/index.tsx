import { BreadcrumbsTrail } from '@molecules/BreadcrumbsTrail';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }}>
        <BreadcrumbsTrail />
        <p>Home</p>
      </div>
    </>
  );
};

export default Home;
