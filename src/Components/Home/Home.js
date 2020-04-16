import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {
        date: new Date(),
    }
    onChange = (date) => {
        this.setState({ date })
    }
    handlButton=(e)=>{
        console.log(e.target.textContent)
    }
    render() {
        return (
            <div>
                <div className="row" style={{ margin: '60px', display: 'block' }} id="first">
                    <div className="col s12 m6">
                        <h1>Your Smile Starts here</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fuga repellat incidunt dolores ipsa sit.</p>
                        <button className="btn" style={{ marginRight: '20px' }} onClick={() => {
                            document.getElementById('first').style.display = 'none';
                            document.getElementById('second').style.display = 'block';
                            document.getElementById('third').style.display = 'block';
                        }}>Get Appointment</button>
                        <Link to='/portal'><button className="btn">Doctor's Portal</button></Link>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <img className="responsive-img" src="images/Mask Group 1.png" alt="" />
                    </div>
                </div>
                <div className="row" id="second" style={{ margin: '60px', display: 'none' } }>
                    <div className="col s12 m6">
                        <h4>Select your Appoinemt Date</h4>
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <img className="responsive-img" src="images/Mask Group 1.png" alt="" />
                    </div>
                </div>
                <div className="row" id="third" style={{ margin: '60px', display: 'none' } }>
                    <h5>Avaliable Appointments on your selected date are :{((this.state.date).toString()).slice(3, 15)}</h5>
                    <div className="row" >
                        <div className="col s12 m4">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title center">Teeth Orthodntics</span>
                                    <span className="card-title center bold">8.00 AM-9 AM</span>
                                    <p className="center">10 spaces available</p>
                                </div>
                                <div className="card-action center">
                                   <button className="btn" onClick={()=>{
                                       const data={
                                           date:(((this.state.date).toString()).slice(3, 15)).trim(),
                                           time:'8 am-9 am',
                                           app: "Teeth Orthodntics",
                                       }
                                       localStorage.setItem('data',JSON.stringify(data));
                                       window.location='/book'
                                   }}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title center">Cosmetic Surgery</span>
                                    <span className="card-title center bold">10.00 AM-11 AM</span>
                                    <p className="center">10 spaces available</p>
                                </div>
                                <div className="card-action center">
                                <button className="btn" onClick={()=>{
                                       const data={
                                           date:(((this.state.date).toString()).slice(3, 15)).trim(),
                                           time:'10 am-11 am',
                                           app: "Cosmetic Surgery",
                                       }
                                       localStorage.setItem('data',JSON.stringify(data));
                                       window.location='/book'
                                   }}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title center">Teeth Teeth Cleaning</span>
                                    <span className="card-title center bold">11.00 AM-12 AM</span>
                                    <p className="center">10 spaces available</p>
                                </div>
                                <div className="card-action center">
                                <button className="btn" onClick={()=>{
                                       const data={
                                           date:(((this.state.date).toString()).slice(3, 15)).trim(),
                                           time:'11 am-12 am',
                                           app: "Teeth Cleaning",
                                       }
                                       localStorage.setItem('data',JSON.stringify(data));
                                       window.location='/book'
                                   }}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title center">Cavity Protection</span>
                                    <span className="card-title center bold">12.00 AM-1 PM</span>
                                    <p className="center">10 spaces available</p>
                                </div>
                                <div className="card-action center">
                                <button className="btn" onClick={()=>{
                                       const data={
                                           date:(((this.state.date).toString()).slice(3, 15)).trim(),
                                           time:'12 am-1 pm',
                                           app: "Cavity Protection",
                                       }
                                       localStorage.setItem('data',JSON.stringify(data));
                                       window.location='/book'
                                   }}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title center">Teeth Whitening</span>
                                    <span className="card-title center bold">1.00 PM-2 PM</span>
                                    <p className="center">10 spaces available</p>
                                </div>
                                <div className="card-action center">
                                <button className="btn" onClick={()=>{
                                       const data={
                                           date:(((this.state.date).toString()).slice(3, 15)).trim(),
                                           time:'1 pm-2 pm',
                                           app: "Teeth Whitening",
                                       }
                                       localStorage.setItem('data',JSON.stringify(data));
                                       window.location='/book'
                                   }}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title center">Teeth Orthodntics</span>
                                    <span className="card-title center bold">8.00 AM-9 AM</span>
                                    <p className="center">10 spaces available</p>
                                </div>
                                <div className="card-action center">
                                <button className="btn" onClick={()=>{
                                       const data={
                                           date:(((this.state.date).toString()).slice(3, 15)).trim(),
                                           time:'10 am-11 am',
                                           app: "Cosmetic Surgery",
                                       }
                                       localStorage.setItem('data',JSON.stringify(data));
                                       window.location='/book'
                                   }}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Home;