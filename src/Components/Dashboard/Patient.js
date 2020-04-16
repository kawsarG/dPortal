import React, { Component } from 'react'
import './Portal.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function createData(sl,date, time, name, phone) {
  return { sl,date, time, name, phone};
}

const rows = [
];
let sl=1;
 class Patient extends Component {
   constructor(props){
     super(props);
     this.state={
       data:[],
     }
   }

   
   async componentDidMount(){
     await fetch('http://tranquil-oasis-44893.herokuapp.com/appointments').then(res=>res.json()).then(deta=>this.setState({data:deta}))
   }
    render() {
     
        return (
            <div className="row">
                <div className="col s12 m2 portal">
                    <ul>
                    <a href="/"><li><h5><i className="material-icons">arrow_back</i>Go Back</h5></li></a>
                       
                        <a href="/portal"><li><h5><i className="material-icons">dashboard</i>Dashboard</h5></li></a> 
                        <a href="/portal/appointment"><li><h5><i className="material-icons">event_available</i>Appointments</h5></li></a> 
                        <a href="/portal/patient"><li><h5><i className="material-icons">filter_list</i>Patients</h5></li></a> 
                        <a href="/portal"><li><h5><i className="material-icons">speaker_notes</i>Prescriptions</h5></li></a>
                        <li><h5><i className="material-icons">settings_applications</i>Settings</h5></li>
                    </ul>
                </div>
                {
                    
                    this.state.data.map(data=>{
                       rows.push(createData(sl++,data.date,data.time,data.name,data.phone));
                    })
                 
                }
                <div className="col s12 m10">
                    <h1 className='center'>All Appointments</h1>
                    <TableContainer component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.phone}>
              <TableCell component="th" scope="row">
                {row.sl}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </div>
            </div>
        )
    }
}
export default Patient;