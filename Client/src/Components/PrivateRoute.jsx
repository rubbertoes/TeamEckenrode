import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Admin/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;