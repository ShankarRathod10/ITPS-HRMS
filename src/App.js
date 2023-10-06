import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom';

//Common
import SideNavbar from './component/common/SideNavbar';
import Dashboard from './component/common/Dashboard';


//Employees
import Employees from './component/employees/Employees';
import EmployeeAwards from './component/employees/Awards';
import EmployeeCreate from './component/employees/EmployeesCreate';
import EmployeeImport from './component/employees/EmployeesImport';
import EmployeeList from './component/employees/EmployeesList';
import EmployeeNotice from './component/employees/Notice';

//Attendance
import Attendance from './component/attendance/Attendance';
import AttendanceImport from './component/attendance/AttendanceImport';
import ManualPunching from './component/attendance/ManualPunching';
import LeaveApplication from './component/attendance/LeaveApplication';
import AbsentsDetails from './component/attendance/AbsentsDetails';
import AttendanceVerification from './component/attendance/AttendanceVerification';

//Payroll
import Payroll from './component/payroll/Payroll';
import Payslip from './component/payroll/Payslip';
import SalarySetup from './component/payroll/SalarySetup';
import SalaryProcess from './component/payroll/SalaryProcess';
import EmployeeLoan from './component/payroll/EmployeeLoan';
import EmployeeConveyance from './component/payroll/EmployeeConveyance';
import TaxFile from './component/payroll/TaxFile';

//Job
import Job from './component/job/Job';
import CandidateCreate from './component/job/CandidateCeate';
import CandidateList from './component/job/CandidateList';
import JobOpeningList from './component/job/JobOpening';
import JobApplicationList from './component/job/JobApplication';
import TrainingList from './component/job/TrainingList';

//Master
import Masters from './component/Masters/Masters';
import Branch from './component/Masters/Branch';
import City from './component/Masters/City';
import Company from './component/Masters/Company';
import Conveyance from './component/Masters/Conveyance';
import Department from './component/Masters/Department';
import DepartmentAssign from './component/Masters/DepartmentAssign';
import Designation from './component/Masters/Designations';
import Holiday from './component/Masters/Holidays';
import Location from './component/Masters/Location';
import Leave from './component/Masters/Leave';
import Qualification from './component/Masters/Qualification';

//AppMaster
import AppMaster from './component/appmaster/AppMaster';
import AddUser from './component/appmaster/AddUsers';
import CommonSetting from './component/appmaster/CommonSetting';
import ListOfUser from './component/appmaster/ListOfUsers';
import Role from './component/appmaster/Roles';





function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Routes>
        <Route path='/'element={<Dashboard />}></Route>
           
           
        <Route path='/employees'element={<Employees />}>
          <Route path='awards'element={<EmployeeAwards />}></Route>
          <Route path='create'element={<EmployeeCreate />}></Route>
          <Route path='import'element={<EmployeeImport />}></Route>
          <Route path='list'element={<EmployeeList />}></Route>
          <Route path='notices'element={<EmployeeNotice />}></Route>
        </Route>

        <Route path='/attendance'element={<Attendance />}>
          <Route path='imports'element={<AttendanceImport />}></Route>
          <Route path='punching'element={<ManualPunching />}></Route>
          <Route path='leave'element={<LeaveApplication />}></Route>
          <Route path='absent'element={<AbsentsDetails />}></Route>
          <Route path='verification'element={<AttendanceVerification />}></Route>
        </Route>


        <Route path='/payroll'element={<Payroll />}>
          <Route path='payslip'element={<Payslip />}></Route>
          <Route path='salarysetup'element={<SalarySetup />}></Route>
          <Route path='salaryprocess'element={<SalaryProcess />}></Route>
          <Route path='loan'element={<EmployeeLoan />}></Route>
          <Route path='conveyance'element={<EmployeeConveyance />}></Route>
          <Route path='taxfile'element={<TaxFile />}></Route>
        </Route>


        <Route path='/reports'element={<Payroll />}>
          <Route path='attendance'element={<Payslip />}></Route>
          <Route path='payslip'element={<SalarySetup />}></Route>
          <Route path='monthlysalary'element={<SalaryProcess />}></Route>
          <Route path='yearlysalary'element={<EmployeeLoan />}></Route>
          <Route path='deduction'element={<EmployeeConveyance />}></Route>
        </Route>

        <Route path='/job'element={<Job />}>
          <Route path='create'element={<CandidateCreate />}></Route>
          <Route path='candidatelist'element={<CandidateList />}></Route>
          <Route path='jobopening'element={<JobOpeningList />}></Route>
          <Route path='jobapplication'element={<JobApplicationList />}></Route>
          <Route path='training'element={<TrainingList />}></Route>
        </Route>

        <Route path='/master'element={<Masters />}>
          <Route path='branch'element={<Branch />}></Route>
          <Route path='city'element={<City />}></Route>
          <Route path='company'element={<Company />}></Route>
          <Route path='conveyance'element={<Conveyance />}></Route>
          <Route path='department'element={<Department/>}></Route>
          <Route path='asign'element={<DepartmentAssign />}></Route>
          <Route path='designation'element={<Designation />}></Route>
          <Route path='holiday'element={<Holiday />}></Route>
          <Route path='leave'element={<Leave />}></Route>
          <Route path='location'element={<Location />}></Route>
          <Route path='qualification'element={<Qualification />}></Route>
        </Route>

        <Route path='/app'element={<AppMaster />}>
          <Route path='adduser'element={<AddUser />}></Route>
          <Route path='setting'element={<CommonSetting />}></Route>
          <Route path='listofuser'element={<ListOfUser />}></Route>
          <Route path='role'element={<Role />}></Route>
        </Route> 
        
      </Routes>
    </div>
  );
}
export default App;
