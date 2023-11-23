import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Register from './Register';
import Login from './Login';
import MembersPage from './MembersPage';

export default function MenuAppBar({ isauth, setContent, setIsauth }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Citas App
                    </Typography>
                    <div>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleMenu}
                            color='inherit'
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {isauth ? (
                                <>
                                    <MenuItem onClick={() => {
                                        setContent(<MembersPage />);
                                        handleClose();
                                    }}>Members</MenuItem>
                                    <MenuItem onClick={() => {
                                        setContent('ERRORS');
                                        handleClose();
                                    }}>Errors</MenuItem>
                                </>
                            ) : (
                                <>
                                    <MenuItem onClick={() => {
                                        setIsauth(true);
                                        setContent(<Login />);
                                        handleClose();
                                    }}>Login</MenuItem>
                                    <MenuItem onClick={() => {
                                        setIsauth(true);
                                        setContent(<Register />);
                                        handleClose();
                                    }}>Register</MenuItem>
                                </>
                            )}
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
