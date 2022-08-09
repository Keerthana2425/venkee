import React, { useState } from "react";
import "./App.css";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import PageOne from "./Components/PageOne";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workSaceName, setWorkSpaceName] = useState("");
  const [workSaceUrl, setWorkSpaceUrl] = useState("");

  const titles = [
    "Welcome! First things first...",
    "Let's set up a home for all your work",
  ];

  const subTitles = [
    "You can always change them later",
    "You can create another work space later",
  ];

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
    console.log(fullName);
  };
  const displayNameHandler = (e) => {
    setDisplayName(e.target.value);
    console.log(displayName);
  };

  const onChangeWorkspaceName = (e) => {
    setWorkSpaceName(e.target.value);
  };

  const onChangeWorkspaceUrl = (e) => {
    setWorkSpaceUrl(e.target.value);
  };
  const btnSubmit = () => {
    if (activeStep === 4) {
      return;
    }
    setActiveStep((currentStep) => currentStep + 1);
  };

  return (
    <Grid
      sx={{
        width: "50%",
        position: "absolute",
        top: "10%",
        left: "25%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <style>
        {`
          .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
    color: #664DE5;
}
.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed {
    color: #664DE5;
}
          `}
      </style>
      <Grid width="50%">
        <Stepper activeStep={activeStep} sx={{ color: "#664DE5" }}>
          <Step>
            <StepLabel />
          </Step>
          <Step>
            <StepLabel />
          </Step>
          <Step>
            <StepLabel />
          </Step>
          <Step>
            <StepLabel />
          </Step>
        </Stepper>
      </Grid>
      {activeStep == 0 && (
        <PageOne
          title={titles[0]}
          subTitle={subTitles[0]}
          onChange1={fullNameHandler}
          onChange2={displayNameHandler}
          feild1val={fullName}
          field2val={displayName}
          label1="Full Name"
          placeholder1="Steve Jobs"
          label2="Display Name"
          placeholder2="Steve"
          submit={btnSubmit}
        />
      )}
      {activeStep == 1 && (
        <PageOne
          title={titles[1]}
          subTitle={subTitles[1]}
          onChange1={onChangeWorkspaceName}
          onChange2={onChangeWorkspaceUrl}
          feild1val={workSaceName}
          field2val={workSaceUrl}
          submit={btnSubmit}
          label1="Workspace Name"
          placeholder1="Eden"
          label2="Workspace Url"
          placeholder2="example"
        />
      )}
    </Grid>
  );
}

export default App;
