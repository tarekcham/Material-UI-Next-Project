import React from 'react';
import {Grid , Paper} from 'material-ui';
import RightPane from './RightPane';
import LeftPane from './LeftPane';

const styles = {
	Paper: {
		padding:20, marginTop: 10, marginbottom: 10
	}
}

export default props => 
	<Grid container>
	
	<Grid item sm>
		<LeftPane styles={styles}/>
	</Grid>
	
	<Grid item sm>
		<RightPane styles={styles}/>
	</Grid>
		
	</Grid>