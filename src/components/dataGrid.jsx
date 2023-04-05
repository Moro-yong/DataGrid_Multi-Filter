import { DataGrid } from '@mui/x-data-grid';
import { COLUMNS } from '../../constants'

export default function BasicGrid({rows}) {
  return (
    <div style={style}>
      <DataGrid rows={rows} columns={COLUMNS} />
    </div>
  );
}

const style = { height: "80vh", width: '50%', minWidth:"800px" }