import { Search } from '@atoms/Search/Search';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Search placeHolder='Search' />
      </div>
    </>
  );
};

export default Home;
