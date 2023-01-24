import type { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'client', headerName: 'Client', width: 130 },
  { field: 'roles', headerName: 'Roles', width: 130 },
  { field: 'estCloseDate', headerName: 'Est. Close Date', width: 130 },
  {
    field: 'startDate',
    headerName: 'Start Date',
    type: 'number',
    width: 90,
  },
  {
    field: 'endDate',
    headerName: 'End Date',
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    client: 'apple',
    estCloseDate: 'Snow',
    roles: 'Jon',
    startDate: 35,
    endDate: '24 Jan  2022',
  },
  {
    id: 2,
    client: 'apple',
    estCloseDate: 'Lannister',
    roles: 'Cersei',
    startDate: 42,
    endDate: '24 Jan  2022',
  },
  {
    id: 3,
    client: 'apple',
    estCloseDate: 'Lannister',
    roles: 'Jaime',
    startDate: 45,
    endDate: '24 Jan  2022',
  },
  {
    id: 4,
    client: 'apple',
    estCloseDate: 'Stark',
    roles: 'Arya',
    startDate: 16,
    endDate: '24 Jan  2022',
  },
  {
    id: 5,
    client: 'apple',
    estCloseDate: 'Targaryen',
    roles: 'Daenerys',
    startDate: null,
    endDate: '24 Jan  2022',
  },
  {
    id: 6,
    client: 'apple',
    estCloseDate: 'Melisandre',
    roles: null,
    startDate: 150,
    endDate: '24 Jan  2022',
  },
  {
    id: 7,
    client: 'apple',
    estCloseDate: 'Clifford',
    roles: 'Ferrara',
    startDate: 44,
    endDate: '24 Jan  2022',
  },
  {
    id: 8,
    client: 'apple',
    estCloseDate: 'Frances',
    roles: 'Rossini',
    startDate: 36,
    endDate: '24 Jan  2022',
  },
  {
    id: 9,
    client: 'apple',
    estCloseDate: 'Roxie',
    roles: 'Harvey',
    startDate: 65,
    endDate: '24 Jan  2022',
  },
];

export const DashboardGrid = () => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
};
