import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { TokenContext } from '../store/context';

export function PrivateRoutes() {
  const { getToken } = useContext(TokenContext);
  if (!getToken()) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
