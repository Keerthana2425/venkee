import React, { useState } from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import InputField from "./Helpers/InputField";

function PageOne(props) {
  const {
    title,
    subTitle,
    onChange1,
    onChange2,
    field1val,
    field2val,
    placeholder1,
    placeholder2,
    label1,
    label2,
    submit,
  } = props;
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "8%",
        }}
      >
        <Typography variant="h4" fontWeight="bold" marginBottom="2%">
          {title}
        </Typography>
        <Typography variant="h6">{subTitle}</Typography>
      </Grid>
      <Grid container width="50%">
        <InputField
          label={label1}
          placeholder={placeholder1}
          changeAction={onChange1}
          value={field1val}
          type="text"
        />
        <InputField
          label={label2}
          placeholder={placeholder2}
          changeAction={onChange2}
          value={field2val}
          type="text"
        />
      </Grid>
      <Grid width="50%" marginTop="2%" marginBottom="5%" height="40px">
        <Button
          fullWidth
          variant="contained"
          onClick={submit}
          sx={{
            height: "100%",
            textTransform: "none",
            bgcolor: "#664DE5",
            ":hover": {
              bgcolor: "#664DE5",
            },
          }}
        >
          Create WorkSpace
        </Button>
      </Grid>
    </Box>
  );
}

export default PageOne;
