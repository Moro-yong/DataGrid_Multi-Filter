export const URL = "http://localhost:3000/MOCK_DATA.json"

export const SELECT_OPTION = [
  { field: 'locate', option: ["All", "서울", "경기", "부산"] },
  { field: 'gender', option: ["All", "M", "F"] },
  { field: 'phone', option: ["All", "010", "02", "017"] },
];

export const COLUMNS = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'age', headerName: 'Age', flex: 1 },
  { field: 'gender', headerName: 'Gender', flex: 1 },
  { field: 'phone', headerName: 'Phone', flex: 1 },
  { field: 'locate', headerName: 'Locate', flex: 1 },
];