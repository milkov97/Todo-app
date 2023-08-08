import React, { FC, ReactElement } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DateFieldInterface } from "./interfaces/dateFieldInterface";
import PropTypes from "prop-types";

// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const TaskDateField: FC<DateFieldInterface> = (props): ReactElement => {
  const {
    value= new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd-MM-yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};

/*
<DatePicker
  label="Task Date"
  slotProps={{
    textField: {
      helperText: "MM/DD/YYYY",
    },
  }}
  value={date}
  onChange={(newValue: React.SetStateAction<Date | null>) => setDate(newValue)}
/>;
*/
