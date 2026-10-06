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
    <div className='h-screen grid grid-cols-[1fr_7fr]'>
      <div className='border-r border-gray-500 px-2 py-4'>
        <AsideNav />
        </div>
      <div className='flex flex-col gap-5  px-6 py-4 overflow-auto' >
       <TopNav />
        <div className= 'h-full overflow-auto'>
              <Outlet />
        </div>
       
      </div>
   
    </div>
  );
};

export default DashboardLayout;
