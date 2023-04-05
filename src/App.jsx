import {useEffect, useState} from 'react';
import Grid from './components/dataGrid'
import Selector from './components/select'
import getUser from './utils/getUser'
import useMountEffect from './hooks/useMountEffect'
import {URL} from '../constants'

import filter from './utils/filter'

function App() {
  const data = getUser(URL)
  const [select, setSelect] = useState({})
  const [filterData, setFilterData] = useState([])
  
  useEffect(()=>{
    setFilterData(data)
  },[data])

  useMountEffect(() => {
    const result = filter({inital: data, option: select})
    setFilterData(result)
  }, [select]);

  return (
    <div style={{display: "flex" , flexDirection:"column", alignItems:"center"}}>
      <Selector state={select} setState={setSelect}/>
      <Grid rows={filterData}/>
    </div>
  )
}
export default App;

