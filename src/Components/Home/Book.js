import React, { Component } from 'react'

export default class Book extends Component {
    state={
        address:'',
        name:'',
        email:'',
        phone:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const da=JSON.parse(localStorage.getItem('data'));
        const data={...this.state,...da};
        fetch('http://localhost:4000/addAppointment',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
        
              },
              body: JSON.stringify(data)
        }).then(res=>res.json()).then(data=>{
            console.log(data);
            localStorage.clear();
            alert('Contacts Added Successfully');
            window.location='/'
        })
       
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{border:'1px solid teal'}}>
                <h5 className="center">Fill up your Contact Properly</h5>
                <div className="input-field" >
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange} autoComplete="off"/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={this.handleChange} autoComplete="off"/>
                </div>
                <div className="input-field">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" onChange={this.handleChange}autoComplete="off"/>
                </div>
                <div className="input-field">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" onChange={this.handleChange}autoComplete="off"/>
                </div>
                <div className="input-field">
                    <button className="btn">Submit</button>
                </div>
            </form>
        )
    }
}
