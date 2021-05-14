import React, { Fragment, useState } from "react";
import { useStateAndDispatch } from "./UseStateAndDispatch";
import { useHistory } from "react-router-dom";

function WithProtectedRoute<T>(Component: React.ComponentType<T>) {
  return function ProtectedComponent(props: T) {
    const { login } = useStateAndDispatch();
    const history = useHistory()
      if (login.islogin === false) {
          history.location.pathname !== '/' && history.push('/')
          return <Fragment>Please Log in</Fragment>
      }
    else return <Component {...props} />;
  };
}
export default WithProtectedRoute;
