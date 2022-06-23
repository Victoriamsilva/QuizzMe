import { observer } from 'mobx-react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserStoreProps } from '../store/userStore';

export function PrivateRoutes({ UserStore }: { UserStore: UserStoreProps }) {
  const { getToken } = UserStore;
  if (!getToken()) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default (observer(PrivateRoutes));