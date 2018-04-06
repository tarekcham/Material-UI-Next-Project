import React from 'react';
import {Paper} from 'material-ui';
import Tabs, { Tab } from 'material-ui/Tabs';


export default props => {
	return (
    <Paper>
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>

	)
}