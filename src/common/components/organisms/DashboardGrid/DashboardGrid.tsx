import type { GridColDef } from '@mui/x-data-grid';

interface DashboardGridProps {
  props: any;
}

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
  {
    field: 'team',
    headerName: 'Team',
    width: 160,
  },
];

export const DashboardGrid = ({ props }: DashboardGridProps) => {
  return '';
  // <DataGrid rows='' columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
};
