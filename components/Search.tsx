"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Button from './Button'

const Search: React.FC = () => {
  const [part, setPart] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setPart(event.target.value as string);
  };
// border-2 border-green-500
  return (
    <section className=" 2xl:max-container items-center relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            helperText="Enter the Car Make"
            id="outlined-required"
            label="Car Make"
            defaultValue=""
          />
          <TextField
            required
            helperText="Model of Car"
            id="outlined-required"
            label="Model"
            defaultValue=""
          />
          <TextField
            required
            helperText="Year of Car"
            id="outlined-required"
            label="Year"
            defaultValue=""
          />
          <TextField
            helperText="(Optional)"
            id="outlined-basic"
            label="Engine Size"
            variant="outlined"
          />
          <FormControl fullWidth sx={{ m: 1, width: '25ch' }}>
            <InputLabel id="demo-simple-select-label">Part Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={part}
              label="Part Type"
              onChange={handleChange}>
              <MenuItem value="oil-filter">Oil Filter</MenuItem>
            </Select>
            <FormHelperText>Enter Part Type</FormHelperText>
          </FormControl>
        </div>
      </Box>

      <div className="my-11 flex flex-wrap gap-5">
            <div className="flex flex-col w-full gap-3 sm:flex-row">
                <Button 
                    type = "button"
                    title = "Search" 
                    variant="btn_red" 
                />
            </div>
        </div>
    </section>
  );
};

export default Search;
