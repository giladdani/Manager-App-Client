import React from 'react'

class EmployeeDetails extends React.Component{
    getEmployeeImage(employee){
        let employeeImage;
        try{
            employeeImage = require(`../images/${employee.first_name.toLowerCase()}${employee.last_name.toLowerCase()}.jpeg`).default;
        }
        catch(error){
            employeeImage = require(`../images/defaultemployee.jpeg`).default;
        }
        return employeeImage;
    }

    handleFireButtonClick(employee){
        if(window.confirm(`Are you sure you want to fire ${employee.first_name}?`)){
            this.props.onFireButtonClick(employee);
        }
        else{
            console.log('deletion aborted!');
        }
    }

    render(){
        const employee = this.props.employee;   // for readability
        const employeeImage = this.getEmployeeImage(employee);

        return(
            <div className="border x-large-font">
                <div className="horizontalAlign">
                    <div className="employeePhoto horizontalAlign">
                        <img src={employeeImage} alt={employee.first_name}></img>
                    </div>
                    <div className="horizontalAlign">
                        <div><span>Name: {employee.first_name} {employee.last_name}</span></div>
                        <div><span>Age: {employee.age}</span></div>
                        <div><span>Position: {employee.position}</span></div>
                        <div><span>Salary: {employee.salary}</span></div>
                    </div>
                </div>
                <div>
                    <div>Actions:</div>
                    <button onClick={() => this.handleFireButtonClick(employee)}>Fire</button>
                </div>
            </div>
        )
    }
}

export default EmployeeDetails;