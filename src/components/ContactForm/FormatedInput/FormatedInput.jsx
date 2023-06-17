import * as React from 'react';
import { IMaskInput } from 'react-imask';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export const FormattedInput = ({ number, onInputChange }) => {
  const [value, setValue] = React.useState({
    textmask: number,
  });

  const handleChange = event => {
    const val = event.target;
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
    onInputChange(val);
  };

  return (
    <Box>
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">Number</InputLabel>
        <Input
          value={value.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
    </Box>
  );
};
