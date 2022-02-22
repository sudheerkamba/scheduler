
import React, { Component, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Scheduler extends Component {

  // state = {
      //panelone: [],
      //paneltwo: []
    //}
    constructor(args) {
        super(args);
    this.state = {  users: []};
}

 async componentDidMount() {
      try {
        setInterval(async () => {
        const res = await fetch('https://gorest.co.in/public/v2/users?page=1');
        console.log(res)
        const usersData = await res.json();
        
console.log(usersData)
        this.setState({
            users: usersData
        })
    }, 10000);
      } catch(e) {
        console.log(e);
      }
    }

  render () {
    let count=0;
    return (
      <div className="App">
        <div className="wrapper">
        <div className="d-flex justify-content-center row m-1">
        <div className="col-md-24">
            <div className="rounded">
                <div className="table-responsive table-borderless">
                    <table className="table">
                      <thead >
                        <tr>
                        <th className="text-center">#</th>
                                
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th></th>
                        </tr>
                      </thead>
                      <tbody className="table-body">
                      {this.state.users.map((userr,i)=>{
                          count=i;
                          return(
                      <tr className=" table-info  border bottom-15">
                                <td className="text-center">{i}</td>
                                {/* <td className="text-center"><img src={flightlist} className="flight-logo" /></td> */}
                                <td className="vertical-centr"><b>{userr.id}</b></td>
                                <td className="vertical-centr">{userr.name}</td>
                                <td className="vertical-centr">{userr.email}</td>
                                <td className="vertical-centr">{userr.gender}</td>
                                <td className="vertical-centr">{userr.status}</td>
                
                                <td className="vertical-centr"></td>
                                <td className="vertical-centr"><i className="fa fa-ellipsis-h text-black-50"></i></td>
                                </tr>
                          )})}
                      </tbody>
                      </table>
                      </div>
                      </div>
                      </div>
                      </div>

    
    </div>
        </div>
      
    );
  }
}

export default Scheduler;