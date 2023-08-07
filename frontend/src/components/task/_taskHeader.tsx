import React, { FC, ReactElement } from "react";
import { Box, Chip, Typography } from "@mui/material";

export const TaskHeader: FC = (): ReactElement => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
      <Box>
        <Typography variant="h6">Test Title</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label='7 August, 2023'/>
      </Box>
    </Box>
  );
};
