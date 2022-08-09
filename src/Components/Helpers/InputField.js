import React from "react";
import { OutlinedInput, Grid } from "@mui/material";

export default function InputField(props) {
  const { changeAction, value, placeholder, type, label, icon } = props;
  return (
    <>
      <Grid
        sx={{
          mb: 1,
          fontWeight: 600,
          fontColor: "#5F6A6F",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {label}
      </Grid>
      <OutlinedInput
        fullWidth
        type={type}
        value={value}
        onChange={changeAction}
        autoComplete="off"
        placeholder={placeholder}
        startAdornment={icon}
        sx={{
          bgcolor: "fff",
          border: "0.5px solid #c0c1c1",
          textTransform: "none",
          fontSize: "15px",
          fontWeight: "300",
          height: "39px",
          borderRadius: "5px",
          minWidth: "280px",
          marginBottom: "4%",
        }}
      />
    </>
  );
}
