import React from "react";
import { ProtectedRoute } from "components";
import Invitation from "pages/Invitation";
import EmployeePage from "pages/EmployeePage";
import EditSpace from "pages/EditSpace";
import MyBookingFilter from "pages/MyBookingFilter";
import MyBooking from "pages/MyBooking";
import ViewBooking from "pages/ViewBooking";
import BookSpaceMonthly from "pages/BookSpaceMonthly";
import BookSpaceWeekly from "pages/BookSpaceWeekly";
import BookSpaceDaily from "pages/BookSpaceDaily";
import ViewSpace from "pages/ViewSpace";
import SpaceManagement from "pages/SpaceManagement";
import Permission from "pages/Permission";
import FilesOne from "pages/FilesOne";
import Files from "pages/Files";
import DocumentsOne from "pages/DocumentsOne";
import Documents from "pages/Documents";
import EmployeeListFilter from "pages/EmployeeListFilter";
import Createbulkemployees from "pages/Createbulkemployees";
import AddEmployee from "pages/AddEmployee";
import EmployeeList from "pages/EmployeeList";
import CreateEmployee from "pages/CreateEmployee";
import EmployeeDirectory from "pages/EmployeeDirectory";
import Sync from "pages/Sync";
import SignUp from "pages/SignUp";
import ChangePassword from "pages/ChangePassword";
import ForgotPassword from "pages/ForgotPassword";
import SignIn from "pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route
          path="/employeedirectory"
          element={<ProtectedRoute element={EmployeeDirectory} />}
        />
        <Route
          path="/syncemployee"
          element={<ProtectedRoute element={Sync} />}
        />
        <Route
          path="/createemployee"
          element={<ProtectedRoute element={CreateEmployee} />}
        />
        <Route
          path="/employeelist"
          element={<ProtectedRoute element={EmployeeList} />}
        />
        <Route
          path="/addemployee"
          element={<ProtectedRoute element={AddEmployee} />}
        />
        <Route
          path="/createbulkemployees"
          element={<ProtectedRoute element={Createbulkemployees} />}
        />
        <Route
          path="/employeelistfilter"
          element={<ProtectedRoute element={EmployeeListFilter} />}
        />
        <Route
          path="/documents"
          element={<ProtectedRoute element={Documents} />}
        />
        <Route
          path="/documentsone"
          element={<ProtectedRoute element={DocumentsOne} />}
        />
        <Route path="/files" element={<ProtectedRoute element={Files} />} />
        <Route
          path="/filesone"
          element={<ProtectedRoute element={FilesOne} />}
        />
        <Route
          path="/permission"
          element={<ProtectedRoute element={Permission} />}
        />
        <Route
          path="/spacemanagement"
          element={<ProtectedRoute element={SpaceManagement} />}
        />
        <Route
          path="/viewspace"
          element={<ProtectedRoute element={ViewSpace} />}
        />
        <Route
          path="/bookspacedaily"
          element={<ProtectedRoute element={BookSpaceDaily} />}
        />
        <Route
          path="/bookspaceweekly"
          element={<ProtectedRoute element={BookSpaceWeekly} />}
        />
        <Route
          path="/bookspacemonthly"
          element={<ProtectedRoute element={BookSpaceMonthly} />}
        />
        <Route
          path="/viewbooking"
          element={<ProtectedRoute element={ViewBooking} />}
        />
        <Route
          path="/mybooking"
          element={<ProtectedRoute element={MyBooking} />}
        />
        <Route
          path="/mybookingfilter"
          element={<ProtectedRoute element={MyBookingFilter} />}
        />
        <Route
          path="/editspace"
          element={<ProtectedRoute element={EditSpace} />}
        />
        <Route
          path="/employeepage"
          element={<ProtectedRoute element={EmployeePage} />}
        />
        <Route
          path="/invitation"
          element={<ProtectedRoute element={Invitation} />}
        />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
