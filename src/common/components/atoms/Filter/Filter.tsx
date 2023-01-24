import { FilterIcon } from '@atoms/Icons/FilterIcon';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import { useState } from 'react';
import styles from './Filter.module.scss';

interface FilterProps {
  label: string;
  options: string[];
}

export function Filter({ label, options }: FilterProps) {
  const [filterOptions, setFilterOptions] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setFilterOptions(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel
          id='demo-simple-select-label'
          shrink={false}
          className={styles['input-label']}
          focused={false}
        >
          <FilterIcon />
          Filters
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={filterOptions}
          label={label}
          onChange={handleChange}
          className={styles['select']}
          IconComponent={'div'}
          disableUnderline
        >
          {options.map((option: string, index: number) => {
            return (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
