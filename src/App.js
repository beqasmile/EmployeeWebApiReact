import logo from './logo.svg';
import './App.css';
import EmployeeComponent from './Components/EmployeeComponent';
import EmployeeFormComponent from './Components/EmployeeFormComponent';

function App() {
  return (
    <div>
      <div className="App">
        <EmployeeComponent></EmployeeComponent>
     
        <EmployeeFormComponent></EmployeeFormComponent>
      </div>

    </div>
  );
}

export default App;
