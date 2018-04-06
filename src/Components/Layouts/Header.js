import React from 'react';
import {Toolbar, AppBar, Typography} from 'material-ui';


export default props => {
	return (
	<AppBar position="static">
		<Toolbar>

		<Typography variant="headline" gutterBottom>
         Exercise Database
    </Typography>


		</Toolbar>
        
  </AppBar>

	)
}