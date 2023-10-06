import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './SideNavbar.css';
import $ from 'jquery';

function SideNavbar() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isFeatShowVisible, setIsFeatShowVisible] = useState(false);
    const [isServShowVisible, setIsServShowVisible] = useState(false);
    const [isPayrollVisible, setPayrollVisible] = useState(false);
    const [isReportsVisible, setisReportsVisible] = useState(false);
    const [isJobVisible,setJobVisible] = useState (false);
    const [isMasterVisible,setMasterVisible] = useState(false);
    const [isAppVisible,setAppVisible] = useState(false)
    const [activeItem, setActiveItem] = useState(0);


    const handleSidebarToggle = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleFeatToggle = () => {
        setIsFeatShowVisible(!isFeatShowVisible);
    };

    const handleServToggle = () => {
        setIsServShowVisible(!isServShowVisible);
    };

    const handlePayrollToggle = () => {
        setPayrollVisible(!isPayrollVisible)
    };

    const handleReportsToggle = () => {
        setisReportsVisible(!isReportsVisible);
    }
    const handleJobToggle = () => {
        setJobVisible(!isJobVisible);
    }
    const handleMasterToggle = () => {
        setMasterVisible(!isMasterVisible);
    }
    const handleAppToggle = () =>{
        setAppVisible(!isAppVisible)
    }

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (

        <div className="side-nav">
            <div onClick={handleSidebarToggle} className={`btn ${isSidebarVisible ? 'click' : ''}`}>
                <span className="fa-solid fa-bars"></span>
            </div>
            <nav className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
                <div className="text">
                    HRMS
                </div>
                <ul>
                    <li className={activeItem === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
                        <Link>Dashboard</Link>
                    </li>

                    <li>
                        <Link className={`feat-btn ${isFeatShowVisible ? 'active' : ''}`} onClick={handleFeatToggle}>
                            Employees
                            <span className={`fas fa-caret-down first ${isFeatShowVisible ? 'rotate' : ''}`}></span>
                        </Link>
                        <ul className={`feat-show ${isFeatShowVisible ? 'show' : ''}`}>
                            <li onClick={handleSidebarToggle}><Link to={'employees/awards'}>Employee Awards</Link></li>
                            <li onClick={handleSidebarToggle}><Link to={'employees/create'}>Employee Create</Link></li>
                            <li onClick={handleSidebarToggle}><Link to={'employees/import'}>Employee Imports</Link></li>
                            <li onClick={handleSidebarToggle}><Link to={'employees/list'}>Awards List</Link></li>
                            <li onClick={handleSidebarToggle}><Link to={'employees/notices'}>Notice List</Link></li>
                        </ul>
                    </li>


                    <li>
                        <Link className={`serv-btn ${isServShowVisible ? 'active' : ''}`} onClick={handleServToggle}>
                            Attendance
                            <span className={`fas fa-caret-down second ${isServShowVisible ? 'rotate' : ''}`}></span>
                        </Link>
                        <ul className={`serv-show ${isServShowVisible ? 'show1' : ''}`}>
                            <li onClick={handleServToggle}><Link to={'attendance/imports'}>Attendance Import</Link></li>
                            <li onClick={handleServToggle}><Link to={'attendance/punching'}>Manual Punching</Link></li>
                            <li onClick={handleServToggle}><Link to={'attendance/leave'}>Leave Application</Link></li>
                            <li onClick={handleServToggle}><Link to={'attendance/absent'}>Absents Details</Link></li>
                            <li onClick={handleServToggle}><Link to={'attendance/verification'}>Attendance Verification</Link></li>
                        </ul>
                    </li>

                    <li >
                        <Link className={`serv-btn ${isPayrollVisible ? 'active' : ''}`} onClick={() => handlePayrollToggle(1)}>
                            Payroll
                            <span className={`fas fa-caret-down second ${isPayrollVisible ? 'rotate' : ''}`}></span>
                        </Link>
                        <ul className={`serv-show ${isPayrollVisible ? 'show1' : ''}`}>
                            <li onClick={handlePayrollToggle}><Link to={'payroll/payslip'}>Payslip</Link></li>
                            <li onClick={handlePayrollToggle}><Link to={'payroll/salarysetup'}>Salary Setup</Link></li>
                            <li onClick={handlePayrollToggle}><Link to={'payroll/salaryprocess'}>Leave Application</Link></li>
                            <li onClick={handlePayrollToggle}><Link to={'payroll/loan'}>Absents Details</Link></li>
                            <li onClick={handlePayrollToggle}><Link to={'payroll/taxfile'}>Attendance Verification</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link className={`serv-btn ${isReportsVisible ? 'active' : ''}`} onClick={() => handleReportsToggle(1)}>Reports
                        <span className={`fas fa-caret-down second ${isReportsVisible ? 'rotate' : ''}`}></span>
                        </Link>
                        <ul className={`serv-show ${isReportsVisible ? 'show1' : ''}`}>
                            <li onClick={handleReportsToggle}><Link to={'reports/payslip'}>Attendance</Link></li>
                            <li onClick={handleReportsToggle}><Link to={'payroll/salarysetup'}>Payslip Bulk Download</Link></li>
                            <li onClick={handleReportsToggle}><Link to={'payroll/salaryprocess'}>Monthly Salary</Link></li>
                            <li onClick={handleReportsToggle}><Link to={'payroll/loan'}>Yearly Salary</Link></li>
                            <li onClick={handleReportsToggle}><Link to={'payroll/taxfile'}>Salary Deduction Details</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link className={`serv-btn ${isJobVisible ? 'active' : ''}`} onClick={() => handleJobToggle(1)}>
                            Job
                            <span className={`fas fa-caret-down second ${isJobVisible ? 'rotate' : ''}`}></span>
                        </Link>
                        <ul className={`serv-show ${isJobVisible ? 'show1' : ''}`}>
                            <li onClick={handleAppToggle}><Link to={'job/create'}>Candidate Create</Link></li>
                            <li onClick={handleAppToggle}><Link to={'job/candidatelist'}>Candidate List</Link></li>
                            <li onClick={handleAppToggle}><Link to={'job/jobopening'}>Job Opening List</Link></li>
                            <li onClick={handleAppToggle}><Link to={'job/jobapplication'}>Job Applicarion List</Link></li>
                            <li onClick={handleJobToggle}><Link to={'job/training'}>Training List</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link className={`serv-btn ${isMasterVisible ? 'active' : ''}`} onClick={() => handleMasterToggle(1)}>
                            Masters
                            <span className={`fas fa-caret-down second ${isMasterVisible ? 'rotate' : ''}`}></span>
                        </Link>
                        <ul className={`serv-show ${isMasterVisible ? 'show1' : ''}`}>
                            <li onClick={handleMasterToggle}><Link to={'master/company'}>Company</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/location'}>Location</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/branch'}>Branch</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/department'}>Department</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/asign'}>Department Assign</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/designation'}>Designations</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/conveyance'}>Conveyance</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/leave'}>Leave</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/sources'}>Sources</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/qualification'}>Qualification</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/holiday'}>Holidays</Link></li>
                            <li onClick={handleMasterToggle}><Link to={'master/city'}>City</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link className={`serv-btn ${isAppVisible ? 'active' : ''}`} onClick={() => handleAppToggle(1)}>
                            App Masters
                            <span className={`fas fa-caret-down second ${isAppVisible ? 'rotate' : ''}`}></span>
                        </Link>
                        <ul className={`serv-show ${isAppVisible ? 'show1' : ''}`}>
                            <li onClick={handleJobToggle}><Link to={'app/adduser'}>Add Users</Link></li>
                            <li onClick={handleJobToggle}><Link to={'job/listofuser'}>List of Users</Link></li>
                            <li onClick={handleJobToggle}><Link to={'job/setting'}>Common Setting</Link></li>
                            <li onClick={handleJobToggle}><Link to={'job/role'}>Roles</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNavbar;