import './Drawer.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WorkExperienceVerticalLinearStepper from '../WorkExperienceVerticalLinearStepper/WorkExperienceVerticalLinearStepper'
import EducationVerticalLinearStepper from '../EducationVerticalLinearStepper/EducationVerticalLinearStepper'
import logo from '../../static/images/cards/profile_pic.jpeg'
import linkedin from '../../static/images/cards/LinkedIn_logo.png'
import leetcode from '../../static/images/cards/leetcode.png'
import github from '../../static/images/cards/github.jpeg'
const drawerWidth = 240;

const ResponsiveDrawer = (props) =>{
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const educationSteps = [
    {
      school: 'University of Wisconsin, Milwaukee',
      branch: 'MS Computer Science',
      location: 'Wisconsin, Milwaukee, United States',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
      duration : 'Sep 2023 - May 2025'
    },
    {
      school: 'Feroze Gandhi Institute of Engineering & Technology, Raebareli',
      branch: 'Mechanical Engineering',
      location: 'Raebareli, India',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
      duration : 'July 2014 - Aug 2018'
    }
  ];

  const workExperienceSteps = [
    {
      company: 'Capri Global Capital Ltd',
      duration: 'Sep 2022 - July 2023',
      location: 'Gurgaon, India',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
      technologies: `Java, Python , Node, React, Docker, Kubernetes`
    },
    {
      company: 'PhonePe',
      duration: 'June 2021 - Oct 2022',
      location: 'Bengaluru, India',
      description:
        `- Created a tool for Re-ordering the gift card(On the basis of user interest) with drag and drop. which increased the gift card conversion rate by 30%`,
      technologies: `Java, Python , Node, React, Docker, Kubernetes`
    },
    {
      company: 'Udaan',
      duration: 'Feb 2020 - Jun 2021',
      location: 'Bengaluru, India',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
      technologies: `Java, Python , Node, React, Docker, Kubernetes`
    }
  ];
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Experience', 'Projects', 'Technologies', 'Contact', 'Coding Profiles', 'Education'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Intrests', 'Outdoor', 'Beliefs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },  display: 'flex', flexDirection: 'column' }}
      >
        <Toolbar />
        <Card sx={{ display: 'flex' }} elevation = {2}>
        <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={logo}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
            <h1 style={{ alignSelf : 'start', marginLeft : '0px'}}>Divakar Yadav</h1>            
            <h3 style={{ alignSelf : 'start', marginLeft : '0px'}}>Software Development Engineer</h3>
          <div className='symlink_wrapper'>
            <a href = 'https://www.linkedin.com/in/divakar-yadav-816358137/' target="_blank">
              <img className='symlink' src = {linkedin}/>
            </a>
            <a href = 'https://leetcode.com/Divakar125/' target="_blank">
              <img className='symlink' src = {leetcode}/>
            </a>
            <a href='https://github.com/divakar-yadav' target="_blank">
              <img className='symlink' src = {github}/>
            </a>
        </div>
        </CardContent>
      </Box>
      <Box>
      </Box>
    </Card>
    <Paper elevation={2} style={{marginTop : '10px', padding: '10px'}}>
      <h2 style={{ display: 'flex', alignSelf : 'start', marginLeft: '10px'}}>Education</h2>
      <EducationVerticalLinearStepper educationSteps = {educationSteps}/>
    </Paper>
    <Paper elevation={2} style={{marginTop : '10px', padding: '10px'}}>
      <h2 style={{ display: 'flex', alignSelf : 'start', marginLeft: '10px'}}>Work Experience</h2>
      <WorkExperienceVerticalLinearStepper workExperienceSteps= {workExperienceSteps}/>
    </Paper>
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;


