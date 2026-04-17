import { use } from "react";
import LogoutBtn from "../components/LogoutBtn";

const employeesPromise = fetch("http://localhost:3000/")
  .then((res) => res.json());

export default function EmpList() {
  const employees = use(employeesPromise);

  return (
    <div className="container mt-4">
      <h2>Employee List</h2>

      <LogoutBtn />

      <ul className="list-group">
        {employees.map((emp,index) => {
          console.log(emp)
          return(
          <li key={index} className="list-group-item">
            <strong>{emp.name}</strong> - {emp.email}
            <br />
            <b>Salary : {emp.salary}</b>
            <br />
            <b>Dept : {emp.dept}</b>
          </li>
        
        )})}
      </ul>
    </div>
  );
}