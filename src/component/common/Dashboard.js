import './Dashboard.css';
import { useState } from "react";


function Dashboard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className='col-sm-9'>
                        <h3 className='sd' >ITPS HRMS FULL SUITS</h3>
                        <h4 className='sr' >Introduction</h4>
                        <p className='ps'>The ITPS developed an application to manage the entire HRMS process, which will help the
                            company HR/Admin to manage their employee’s database, Salary, Leaves, Interview Process and
                            other areas.<br></br>
                            This application can be managed with more than one companies or group of companies with this
                            single application.</p>
                    </div>

                    <div className="login-page">
                        {/* <h6 >Login Page</h6> */}
                        <div className="login-form">

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            /> <br></br>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            /><br></br>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center my-2 py-2" style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>Dashboard</h6>

                <div className="box" style={{ backgroundColor: "red", width: "300px", height: "100px" }}></div>

                <div className="box" style={{ backgroundColor: "green", width: "300px", height: "100px" }}></div>

                <div className="box" style={{ backgroundColor: "blue", width: "300px", height: "100px" }}></div>
            </div>
        </div>


    )
}
export default Dashboard;











