import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



const WorkExperienceVerticalLinearStepper = (props) => {
  const {workExperienceSteps} = props

  return (
    <Box sx={{ maxWidth: 1000 }}>
      <Stepper orientation="vertical" >
        {workExperienceSteps.map((step, index) => (
          <Step key={step.company} active>
            <StepLabel
            >
              <h3>{step.company}</h3>
            </StepLabel>
            <StepContent>
              <div style={{display : 'flex', flexDirection : 'column' }}>
              <p style={{alignSelf : 'start', margin  :'0px'}}>{step.duration}</p>
              <p style={{alignSelf : 'start', margin  :'0px'}}>{step.location}</p>
              <p style = {{padding : '0px', alignSelf : 'start', textAlign : 'start', margin  :'0px'}}>{step.description}</p>
              <p style = {{padding : '0px', alignSelf : 'start', textAlign : 'start', margin  :'0px'}}>{step.technologies}</p>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
export default WorkExperienceVerticalLinearStepper