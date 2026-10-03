import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    let { employee, isLoading } = useSelector((state) => state.auth);

    if (isLoading) return <h1>loading...</h1>;

    if (!employee) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute
