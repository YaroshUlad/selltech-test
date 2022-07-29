import React, { SyntheticEvent } from 'react';

import Add from '@mui/icons-material/Add';
import Clear from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const icon = <Add fontSize="small" />;
const checkedIcon = <Clear fontSize="small" />;

type OptionType = {
  name: string;
  id: string;
};

type CustomSelectPropsType = {
  options: OptionType[];
  isMultiple: boolean;
  name: string;
  error: string | undefined;
  onChangeCallback: (name: string, value: string | string[] | null) => void;
};

export const CustomSelect = (props: CustomSelectPropsType): React.ReactElement => {
  const { options, isMultiple, name, onChangeCallback, error } = props;
  const opt = options.map(el => el.name).sort();
  const onChangeHandler = (
    event: SyntheticEvent<Element, Event>,
    value: string | string[] | null,
  ): void => {
    onChangeCallback(name, value);
  };

  return (
    <Autocomplete
      aria-required
      multiple={isMultiple}
      options={opt}
      onChange={onChangeHandler}
      getOptionLabel={option => option}
      renderOption={(param, option, { selected }) => (
        <li
          {...param}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>{option}</span>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
        </li>
      )}
      renderInput={params => (
        <TextField
          {...params}
          error={!!error}
          id={name}
          name={name}
          label={error || name}
          margin="normal"
          placeholder={name}
        />
      )}
    />
  );
};
