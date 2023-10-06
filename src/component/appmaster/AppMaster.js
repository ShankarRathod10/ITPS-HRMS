import { Outlet } from "react-router-dom";

function AppMaster(){
    return(
        <div>
           AppMaster
           <Outlet></Outlet>
        </div>
    )
}
export default AppMaster;