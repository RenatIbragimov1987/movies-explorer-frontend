import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from 'react';
import { CurrentUserContext } from "../../contexts/CurentUserContext";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ component: Component, ...props }) => {
	const currentUser = useContext(CurrentUserContext);

  return (
    <Route>
      {currentUser ? <Component {...props} /> : <Redirect to="./signin" />}
    </Route>
  );
};

export default ProtectedRoute;