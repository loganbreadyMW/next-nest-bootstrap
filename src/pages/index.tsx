import { Button } from '@atoms/Button';
import styles from '@atoms/Button/Button.module.scss';
import { PlusIcon } from '@atoms/Icons/PlusIcon';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100vw', padding: '10px' }}>
        <Button
          color='secondary'
          variant='filter'
          className={styles['button__filter']}
          onClick={() => alert('Clicked')}
        >
          <PlusIcon />
          Add Client
        </Button>
      </div>
    </>
  );
};

export default Home;
