import { Outlet } from "react-router-dom";

function Employees (){
    return (
        <div>
            Employees
            <Outlet></Outlet>
        </div>
    )
}
export default Employees;