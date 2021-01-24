import React, { Component } from 'react';

class EmployeeFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            employee : {}
        }
        
    }

    componentDidMount() {
        fetch('https://localhost:44316/api/Employee/GetEmployee')
        .then (res=> res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                    employee: result
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
        const { error, isLoaded, employee } = this.state;
        if (error==null && isLoaded) 
            return (
                <div>
                    <h1>{employee.employeeName}</h1>
                    <h2>{employee.employeeFamily}</h2>
                    <h2>{employee.employeeSalary}</h2>
                    <h2>{employee.employeeId}</h2>
                </div>
            )
        else
        {
            if (error!=null)
                return (
                    <h1>{error.message}</h1>
                )
            else
            {
                return (<h1>Loading....</h1>)
            }

        }
    }
}

export default EmployeeFormComponent;