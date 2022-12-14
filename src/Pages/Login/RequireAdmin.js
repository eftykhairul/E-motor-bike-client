import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';
import Navigation from '../Navigation/Navigation';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading></Loading>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigation to="/login" state={{ from: location }} replace></Navigation>
    }
    return children;
};

export default RequireAdmin;