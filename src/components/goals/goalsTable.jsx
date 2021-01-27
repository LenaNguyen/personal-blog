import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Table as MuiTable} from '@material-ui/core';
import {goalTypes} from '../../utils/constants';
import BinaryGoalStatus from './binaryGoalStatus';
import QualitativeGoalStatus from './qualitativeGoalStatus';
import QuantitativeGoalStatus from './quantitativeGoalStatus';

const useStyles = makeStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
}));

const getStatusByType = (goal) => {
	switch(goal.type.toLowerCase()) {
		case goalTypes.BINARY:
			return <BinaryGoalStatus completed={Boolean(goal.completed)}/>
		case goalTypes.QUALITATIVE:
			return <QualitativeGoalStatus status={goal.status} />
		case goalTypes.QUANTITATIVE:
			return <QuantitativeGoalStatus total={goal.total} num_complete={goal.num_complete} />
		default:
			return <div>Missing</div>
	}
}

const GoalsTable = ({headers, rows}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label="goals table">
        <TableHead>
          <TableRow>
			  {headers.map(header => (
				  <TableCell className={classes.head} align="center" key={header}><strong>{header}</strong></TableCell>
			  ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell align="left" component="th" scope="row">
                <Box ml={2}>{row.title}</Box>
              </TableCell>
              <TableCell align="center">{row.tags[0]}</TableCell>
              <TableCell align="center">{getStatusByType(row)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default GoalsTable;