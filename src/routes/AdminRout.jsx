import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const AdminRout = ({children}) => {
    const { loading } = useAuth();
    const  { role, roleLoading } = useRole()

    if(loading || roleLoading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    if(role !== 'admin'){
        return <div><p>Access is forbidden</p></div>
    }

    return children;
};

export default AdminRout;