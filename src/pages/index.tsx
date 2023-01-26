import { DashboardGridTeam } from '@molecules/DashboardGridTeam';
import type { NextPage } from 'next';

const tempTeam = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    image: 'https://material-ui.com/static/images/avatar/1.jpg',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    image: 'https://material-ui.com/static/images/avatar/3.jpg',
  },
  {
    name: 'Tom Doe',
    email: 'tom@example.com',
    image: 'https://material-ui.com/static/images/avatar/2.jpg',
  },
  {
    name: 'Bob Doe',
    email: 'bob@example.com',
    image: 'https://material-ui.com/static/images/avatar/4.jpg',
  },
  {
    name: 'Alice Doe',
    email: 'alice@example.com',
    image: 'https://material-ui.com/static/images/avatar/5.jpg',
  },
];

const tempRows = [
  {
    id: 1,
    client: 'apples',
    roles: {
      enginers: {
        amount: 2,
      },
      designers: {
        amount: 1,
      },
      projectManager: {
        amount: 1,
      },
    },
    estCloseDate: '1-2-2024',
    startDate: '1-2-2021',
    endDate: '1-2-2022',
    team: <DashboardGridTeam team={tempTeam} />,
  },
  // {
  //   id: 2,
  //   client: 'apple',
  //   roles: {
  //     enginers: {
  //       amount: 2,
  //     },
  //     designers: {
  //       amount: 1,
  //     },
  //     projectManager: {
  //       amount: 1,
  //     },
  //   },
  //   estCloseDate: '1-2-2024',
  //   startDate: '1-2-2021',
  //   endDate: '1-2-2022',
  //   team: tempTeam,
  // },
  // {
  //   id: 3,
  //   client: 'apple',
  //   roles: {
  //     enginers: {
  //       amount: 2,
  //     },
  //     designers: {
  //       amount: 1,
  //     },
  //     projectManager: {
  //       amount: 1,
  //     },
  //   },
  //   estCloseDate: '1-2-2024',
  //   startDate: '1-2-2021',
  //   endDate: '1-2-2022',
  //   team: tempTeam,
  // },
  // {
  //   id: 4,
  //   client: 'apple',
  //   roles: {
  //     enginers: {
  //       amount: 2,
  //     },
  //     designers: {
  //       amount: 1,
  //     },
  //     projectManager: {
  //       amount: 1,
  //     },
  //   },
  //   estCloseDate: '1-2-2024',
  //   startDate: '1-2-2021',
  //   endDate: '1-2-2022',
  //   team: tempTeam,
  // },
  // {
  //   id: 5,
  //   client: 'apple',
  //   roles: {
  //     enginers: {
  //       amount: 2,
  //     },
  //     designers: {
  //       amount: 1,
  //     },
  //     projectManager: {
  //       amount: 1,
  //     },
  //   },
  //   estCloseDate: '1-2-2024',
  //   startDate: '1-2-2021',
  //   endDate: '1-2-2022',
  //   team: tempTeam,
  // },
];

const Home: NextPage = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100vw', padding: '10px' }}>
        {/* <DashboardGrid props={tempRows} /> */}
      </div>
    </>
  );
};

export default Home;
