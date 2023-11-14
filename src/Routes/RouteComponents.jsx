import Cookies from "js-cookie";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import { GlobalProvider } from "../StateManagements/GlobalContext";
import Default from "../Components/Default/Default";
import LayoutSidebar from "../Layouts/Sidebar/LayoutSidebar";
import ErrorPage from "../Components/Default/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AccountSetting from "../Pages/Account/AccountSetting";
import { UserProvider } from "../StateManagements/UserContext";
import { SystemInformationProvider } from "../StateManagements/SystemInformationContext";
import UserManager from "../Pages/UserManager/UserManager";
import { UserManagerProvider } from "../StateManagements/UserManagerContext";
import DetailActivity from "../Pages/UserManager/DetailActivity";
import { StatusServerProvider } from "../StateManagements/StatusServerContext";
import { CallActivityProvider } from "../StateManagements/CallActivityContext";
import CommunicationMatrix from "../Pages/CommunicationMatrix/CommunicationMatrix";
import { CommunicationMatrixProvider } from "../StateManagements/CommunicationMatrixContext";

const SignInRoute = (props) => {
  if (Cookies.get("token") !== undefined) {
    return <Navigate to={"/"} />;
  } else if (Cookies.get("token") === undefined) {
    return props.children;
  }
};

const HomeRoute = (props) => {
  if (Cookies.get("token") !== undefined) {
    return props.children;
  } else if (Cookies.get("token") === undefined) {
    return <Navigate to={"/signin"} />;
  }
};

const RouteComponents = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <UserProvider>
          <SystemInformationProvider>
            <UserManagerProvider>
              <StatusServerProvider>
                <CallActivityProvider>
                  <CommunicationMatrixProvider>
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <Dashboard />
                              {/* <Table /> */}
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/server-manager"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <Default />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/device-manager"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <Default />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/device-activity"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <Default />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/sip-account"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <Default />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/group-list"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <Default />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/user-manager"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <UserManager />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/user-manager/detail-activity"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <DetailActivity />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/communication-matrix"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <CommunicationMatrix />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/log-status"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <Default />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/account-setting"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <AccountSetting />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route
                        path="/signin"
                        element={
                          <SignInRoute>
                            <SignIn />
                          </SignInRoute>
                        }
                      />
                      <Route
                        path="/signup"
                        element={
                          <SignInRoute>
                            <SignUp />
                          </SignInRoute>
                        }
                      />
                      {/* COBA */}
                      <Route
                        path="/default"
                        element={
                          <HomeRoute>
                            <LayoutSidebar>
                              <Default />
                            </LayoutSidebar>
                          </HomeRoute>
                        }
                      />
                      <Route path="/*" element={<ErrorPage />} />
                    </Routes>
                  </CommunicationMatrixProvider>
                </CallActivityProvider>
              </StatusServerProvider>
            </UserManagerProvider>
          </SystemInformationProvider>
        </UserProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default RouteComponents;
