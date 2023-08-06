import React, { FC, ReactElement, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";


export const TaskDateField: FC = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker 
          label="Task Date"
          format='dd-MM-yyyy'
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </LocalizationProvider>
    </>
  );
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