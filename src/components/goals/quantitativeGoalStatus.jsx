import React from 'react';

const QuantitativeGoalStatus = ({total, num_completed}) => {
	return <span>{num_completed || 0}/{total}</span>
}

export default QuantitativeGoalStatus;