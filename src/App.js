import React, { Component } from 'react';
import Customer from './compo/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme =>(
  {
    root:{
      width:'100%',
      marginTop: theme.spacing.unit * 3,
      overflowX:'auto'
    },
    table:{
      minWidth:1080
    }
  }
)



const customers=[ {
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'JUNGMIN',
  'gender':'Man',
  'job':'PROGRAMER'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any',
  'name':'JUNGMIN2',
  'gender':'Man2',
  'job':'PROGRAMER2'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any',
  'name':'JUNGMIN3',
  'gender':'Man2',
  'job':'PROGRAMER3'
}
]

class App extends Component{

  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
          { customers.map( i => { return(
              <Customer key={i.id} id={i.id} image={i.image}
                name={i.name} gender={i.gender}job={i.job}
              />
            );})
        }

          </TableBody>

        </Table>
      </Paper>

      

   
    );
  }
}

export default withStyles(styles)(App);
