import { DashboardSummaryCard } from '@atoms/DashboardSummaryCard';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100vw', padding: '10px' }}>
        <DashboardSummaryCard
          cardTitle='Overall Client Health'
          cardContentLeft='8/10'
          cardContentRight='2%'
          isPositive={true}
        />
      </div>
    </>
  );
};

export default Home;
