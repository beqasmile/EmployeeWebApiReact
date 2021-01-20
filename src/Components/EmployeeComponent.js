import React, { Component } from 'react';

class EmployeeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            employees: []
        }
        
    }


    componentDidMount() {
        fetch('https://localhost:44316/api/Employee/GetEmployeeList')
        .then (res=> res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                    employees: result
                })
            },
            (error)=> {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render(){
        const { error, isLoaded, employees } = this.state;
        if (!error)
            return (
                <ul>
                    {employees.map(item => (
                                <li key={item.employeeId}>
                                    {item.employeeName} {item.employeeFamily}
                                </li>
                    ))}
                </ul>
            )
        else
            return (
                <h1>{error.message}</h1>
            )
    }

    
} 

export default EmployeeComponent;