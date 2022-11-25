import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const persistroot = localStorage.getItem("access_token");

  if (
    !persistroot &&
    [
      "/employeedirectory",
      "/createemployee",
      "/employeelist",
      "/addemployee",
      "/createbulkemployees",
      "/employeelistfilter",
      "/documents",
      "/documentsone",
      "/files",
      "/filesone",
      "/permission",
      "/spacemanagement",
      "/viewspace",
      "/bookspacedaily",
      "/bookspaceweekly",
      "/bookspacemonthly",
      "/viewbooking",
      "/mybooking",
      "/mybookingfilter",
      "/editspace",
      "/employeepage",
      "/invitation",
    ].includes(pathname)
  ) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
