import React, { FC, ReactElement } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { TaskHeaderInterface } from "./interfaces/TaskHeaderInterface";
import {format, parse} from 'date-fns'
import PropTypes from 'prop-types'


export const TaskHeader: FC<TaskHeaderInterface> = (props): ReactElement => {

  
  const { title = "Default title", date = new Date() } = props;
  // console.log("Original date:", date);
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={`${format(date, 'PPP')}`} />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}