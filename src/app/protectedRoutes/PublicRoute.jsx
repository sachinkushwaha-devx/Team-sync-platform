import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    let { employee, isLoading } = useSelector((store) => store.auth);

    if (isLoading) return <h1>loading...</h1>;

    if (employee) {
        return <Navigate to="/home" replace />;
    }

    return <Outlet />;
}

export default PublicRoute
