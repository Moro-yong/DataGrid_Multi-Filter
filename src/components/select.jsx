import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {SELECT_OPTION}  from '../../constants'

const style = {display:"flex", width:"50%", minWidth:"800px", marginBottom:"10px"}

export default function BasicSelect({state, setState}) {
  const handleChange = (e) => {
    const {value, name} = e.target
    const {[name]: val, ...rest} = state

    if(value === "All") setState(rest)
    else setState(pre => ({...pre, [name]: value}))
  }

  return (
    <div style={style}>
      {SELECT_OPTION.map(list => (
        <Box sx={{ flex: 1 }} key={list.field}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{list.field}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label={list.field}
              name={list.field}
              defaultValue=""
              onChange={handleChange}
            >
              {list.option.map((item,index) => 
                <MenuItem key={index} value={item}>{item}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Box>
      ))}
    </div>
  );
}