import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from "prop-types";



const AppBarDefault = ({functions}) => {
    

    
    return (
    <>
    <CssBaseline />
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						color="inherit"
						size="medium"
						aria-label="Open menu"
						edge="start">
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
    </>
    )
}

AppBarDefault.propTypes = {
	functions: PropTypes.func,
};

export default AppBarDefault;