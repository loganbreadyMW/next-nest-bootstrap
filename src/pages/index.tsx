import { Filter } from '@atoms/Filter';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const filterOptions = ['All', 'Active', 'Completed'];
  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Filter options={filterOptions} />
      </div>
    </>
  );
};

export default Home;
