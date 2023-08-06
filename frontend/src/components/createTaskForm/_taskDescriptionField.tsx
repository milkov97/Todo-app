import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { TextFieldInterface } from "./interfaces/textFieldInterface";
import PropTypes from "prop-types";

export const TaskDescriptionField: FC<TextFieldInterface> = (props): ReactElement => {
  const { onChange = (e) => console.log(e), disabled = false } = props;
  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};


TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
