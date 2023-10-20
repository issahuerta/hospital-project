import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectTiendas({placeholder,setValue,data,value}) {

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const renderData= ()=>{
    return data.map(e => (<MenuItem value={e.id} key={e.id}>{e.descripcion} </MenuItem>))
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {renderData()}
        </Select>
      </FormControl>
    </Box>
  );
}
