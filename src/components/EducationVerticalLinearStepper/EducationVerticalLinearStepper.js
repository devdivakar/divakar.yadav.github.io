import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



const EducationVerticalLinearStepper = (props) => {
  const {educationSteps} = props

  return (
    <Box sx={{ maxWidth: 1000 }}>
      <Stepper orientation="vertical" >
        {educationSteps.map((step, index) => (
          <Step key={step.school} active>
            <StepLabel
            >
              <h3>{step.school}</h3>
            </StepLabel>
            <StepContent>
              <div style={{display : 'flex', flexDirection : 'column' }}>
              <p style={{alignSelf : 'start', margin : '0px'}}>{step.branch}</p>
              <p style={{alignSelf : 'start', margin : '0px'}}>{step.duration}</p>
              <p style={{alignSelf : 'start', margin : '0px'}}>{step.location}</p>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
export default EducationVerticalLinearStepper