import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Slideshow from 'components/dashboard/Slideshow';
import Applications from 'components/dashboard/Applications';
import Feedbacks from 'components/dashboard/Feedbacks';
import ContactUs from 'components/dashboard/ContactUs';
import Users from 'components/dashboard/Users';
import logo from "../images/Logo.png";

import Avatar from '@material-ui/core/Avatar';
import tw from "twin.macro";
import styled from "styled-components";

import { deepOrange, deepPurple, yellow } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router';




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;


const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepOrange[500],
        },
        secondary: {
            main: '#f44336',
        },
    },
});


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    yellow: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: yellow[800],
    },
}));

function AdminTabDashboard(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleColorChange = (index) => {
        return '#000'
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token === null)
        if(token === "" || token === null){
            props.history.push('login-admin-dashboard')
        }
        const ele = document.getElementsByClassName('MuiTabs-scroller')
        ele[0].style.overflow = "scroll"
    }, [])

    const logoutHandler=()=>{
        localStorage.setItem('token',"")
        props.history.push('login-admin-dashboard')
    }

    return (
        <>
            <div className="container-fluid mb-2">
                <div className="row">
                    <div className="col-9">
                        {/* <Avatar className={classes.yellow + " mt-2 "}>SC</Avatar> */}
                        <LogoLink href="/" className="mt-2">
                            <img src={logo} alt="logo" />
                            Shyam Chemicals
                        </LogoLink>
                    </div>
                    <div className="col-2 ">
                        <button className="btn btn-sm btn-danger text-right mt-3" onClick={logoutHandler}>Logout</button>
                    </div>
                </div>
            </div>
            <div className={classes.root}>
                <AppBar position="static" color="primary">

                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  >
                        <Tab label="Slideshow" {...a11yProps(0)} style={{ overflow: 'scroll' }} />
                        <Tab label="Applications" {...a11yProps(1)} style={{ overflow: 'scroll' }} />
                        <Tab label="Feedbacks" {...a11yProps(2)} style={{ overflow: 'scroll' }} />
                        <Tab label="Contact Us" {...a11yProps(3)} style={{ overflow: 'scroll' }} />
                        <Tab label="Users" {...a11yProps(4)} style={{ overflow: 'scroll' }} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Slideshow />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Applications />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Feedbacks />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ContactUs />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Users />
                </TabPanel>
            </div>
        </>
    );
}

export default withRouter(AdminTabDashboard)
