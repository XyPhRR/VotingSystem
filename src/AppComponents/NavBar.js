import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Button,
    Divider,
    Dialog,
    DialogTitle,
    DialogActions,
} from '@mui/material'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { Box } from '@mui/system'
import NotificationsIcon from '@mui/icons-material/Notifications';
import GradeIcon from '@mui/icons-material/Grade';
import './styles.css'

let logo1 = require('../../src/logo1.jpg')

const drawerWidth = 240;

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(null)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const renderDialog = () => {
        return (
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogTitle> Do You want To Log Out ?</DialogTitle>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}> NO</Button>
                    <Button onClick={() => setOpen(false)} component={Link} to='/'> Yes</Button>
                </DialogActions>
            </Dialog>
        )
    }

    const renderAppBar= () => {
        return (
            <>
                <AppBar 
                    position='fixed'
                    color='error'
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                >
                    <Toolbar>
                        <img 
                            src={logo1}
                            alt='logo1'
                            className='logo1'
                            height={40}
                            width={50}
                        />
                        <Typography variant='h6' component='div'>
                            Govt. Zirtiri Residential Science College
                        </Typography>
                        <div style={{ flexGrow: 1 }}/>
                        <div>
                            <IconButton
                                color='inherit'
                                onClick={(e) => setOpenMenu(e.currentTarget)}
                            >
                                <AccountCircleIcon />
                            </IconButton>
                        </div>
                        <Menu
                            id='account-menu'
                            anchorEl={openMenu}
                            open={Boolean(openMenu)}
                            onClose={() => setOpenMenu(false)}
                        >
                            <MenuItem
                                onClick={() => setOpenMenu(false)}
                                component={Link}
                                to='/profile'
                            >
                                Profile
                            </MenuItem>
                            <MenuItem 
                                onClick={() => setOpen(true)}
                            >
                                Log Out
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                    {renderDialog()}
                </AppBar >
            </>
    )}

    const renderSideBar = () => {
        return (
            <>
                <Drawer
                    variant='permanent'
                    style={drawers}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto', background: '#d50000', color: '#fafafa' }}>
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <GradeIcon />
                                    </ListItemIcon>
                                    <ListItemText onClick={() => navigate('/dashbord')}>
                                        <Typography fontSize={12} style={{flexGrow:1}}> DASHBORD </Typography>    
                                    </ListItemText> 
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AutoAwesomeMosaicIcon />
                                    </ListItemIcon>
                                    <ListItemText onClick={() => navigate('/student-union')}>
                                        <Typography fontSize={12} style={{flexGrow:1}}> STUDENTS' UNION </Typography>    
                                    </ListItemText> 
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>                            
                                <ListItemButton>
                                    <ListItemIcon>
                                        <NotificationsIcon />
                                    </ListItemIcon>
                                    <ListItemText onClick={() => navigate('/notice')}>
                                        <Typography fontSize={14}> Notice </Typography>    
                                    </ListItemText> 
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </List>
                    </Box>
                    <Box 
                        style={{ flexGrow: 1 }}
                        sx={{ background: '#d50000', color: '#fafafa' }}
                    />
                    <Box sx={{ bottom: 1, background: '#d50000', color: '#fafafa'}} >
                        <Button style={{
                            marginLeft: 90,
                            marginBottom: 10,
                            color:'inherit'
                        }}
                            onClick={() => navigate('/about')}
                        >
                            About
                        </Button>
                        </Box>
                </Drawer>
            </>
        )
    }

    const drawers = {
        backgroundColor: 'red'
    }

    return (
        <div>
            <Box
                sx={{display: 'flex'}}
            >
                <CssBaseline />
                {renderAppBar()}
                {renderSideBar()} 
            </Box>           
        </div>
    )
}

export default NavBar