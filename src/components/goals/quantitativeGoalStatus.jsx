import React from 'react';

const QuantitativeGoalStatus = ({total, num_complete}) => {
	return <span>{num_complete || 0}/{total}</span>
}

export default QuantitativeGoalStatus;