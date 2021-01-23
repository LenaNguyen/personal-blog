import React from 'react';

const getEmoji = (status) => {
	console.log(status)
	switch(status) {
		case "1":
			return (<span role="img" aria-label="frown">☹️</span>)
		case "2":
			return (<span role="img" aria-label="slight frown">😐</span>)
		case "3":
			return (<span role="img" aria-label="sweat smile">😅</span>)
		case "4":
			return (<span role="img" aria-label="smile">🙂</span>)
		case "5":
			return (<span role="img" aria-label="beaming smile">😁</span>)
		default:
			return "oops"
	}
}

const QualitativeGoalStatus = ({status}) => {
	return getEmoji(status)
}

export default QualitativeGoalStatus;