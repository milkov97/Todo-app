import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { TextFieldInterface } from "./interfaces/textFieldInterface";
import PropTypes  from 'prop-types'

export const TaskTitleField: FC<TextFieldInterface> = (props): ReactElement => {
  const { onChange = (e) => console.log(e), disabled = false} = props;
  return (
    <TextField
      id="title"
      label="Task title"
      placeholder="Task title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}
