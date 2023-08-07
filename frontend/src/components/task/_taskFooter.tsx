import React, { FC, ReactElement } from "react";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";
//@ts-ignore
export const TaskFooter: FC = (): ReactELement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
            color:'#ffffff'
        }}
      >
        Makr Complete
      </Button>
    </Box>
  );
};
