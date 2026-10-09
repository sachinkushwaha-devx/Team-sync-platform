import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import AsideNav from '../../features/dashboard/ui/components/AsideNav';
import TopNav from '../../features/dashboard/ui/components/TopNav';
import { removeEmployee } from '../../features/auth/ui/hooks/state/auth/authSlice';
import { SESSION_EXPIRED_EVENT } from '../../config/Axiosinstance';


const DashboardLayout = () => {
  const { mode } = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [mode]);

  useEffect(() => {
    const handleSessionExpired = () => {
      dispatch(removeEmployee());
      navigate('/', { replace: true });
    };

    window.addEventListener(SESSION_EXPIRED_EVENT, handleSessionExpired);
    return () => {
      window.removeEventListener(SESSION_EXPIRED_EVENT, handleSessionExpired);
    };
  }, [dispatch, navigate]);

  return (
    <div className="flex min-h-dvh flex-col lg:grid lg:h-dvh lg:min-h-0 lg:grid-cols-[clamp(14rem,18vw,18rem)_minmax(0,1fr)]">
      <div className="min-w-0 border-b border-gray-500 px-2 py-2 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:py-4">
        <AsideNav />
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 px-[var(--page-gutter)] py-4 lg:gap-5 lg:overflow-y-auto">
        <TopNav />
        <div className="dashboard-content-scroll min-h-0 min-w-0 flex-1 lg:overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
