import React from 'react';
import {Chip} from '@material-ui/core';

const BinaryGoalStatus = ({completed}) => {
	return <Chip size="small" label={completed ? "Done" : "Not Done Yet"}/>
}

export default BinaryGoalStatus;