import React, { FC, ReactElement } from "react";
import { Typography, Box } from "@mui/material";
import { TaskDescriptionInterface } from "./interfaces/TaskDescriptionInterface";
import PropTypes from "prop-types";

export const TaskDescription: FC<TaskDescriptionInterface> = (
  props
): ReactElement => {
  const { description = "Description text" } = props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
