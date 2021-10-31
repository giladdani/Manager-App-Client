import React from 'react'
import axios from 'axios'
import EmployeesList from './EmployeesList'

class Employees extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employees: [],
        }
        this.handleEmployeeClick = this.handleEmployeeClick.bind(this);
    }

    componentDidMount(){
        this.fetchAllEmployees();
    }

    handleEmployeeClick(){
        console.log("handle employee click!");
    }
    
    fetchAllEmployees(){
        axios.get(`http://localhost:3000/employees`)
        .then(res => {
            this.setState({employees: res.data});
        })
        // @ADD ERROR HANDLING
    }

    handleSearchBoxValueChange(event){
        this.setState({searchBoxValue: event.target.value})
    }

    render(){
        return(
            <div>
                <p>Manage Employees</p>
                {this.state.employees.length > 0 && (<EmployeesList data={this.state}/>)}
                {/* <EmployeeDetails/> */}
            </div>
        )
    }
}

export default Employees;