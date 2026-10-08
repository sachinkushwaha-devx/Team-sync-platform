import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Lightbulb, LogOut, Menu, Moon, Search } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../../shared/state/ThemeSlice.jsx';
import { removeEmployee } from '../../../auth/ui/hooks/state/auth/authSlice';
import { axiosInstance } from '../../../../config/Axiosinstance';

const TopNav = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  let { mode } = useSelector((store) => store.theme);

  let handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await axiosInstance.post('/auth/logout');
    } catch (error) {
      console.error('Logout request failed:', error.response?.data || error.message);
      window.alert('Server se logout confirm nahi ho saka. Aapke device par session clear kar diya gaya hai.');
    } finally {
      dispatch(removeEmployee());
      navigate('/', { replace: true });
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="flex justify-between bg-(--bg-card) items-center">
      <div className="flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-(--bg-surface) border border-gray-600">
        <Search size={23} />
        <input
          className="outline-0 w-full text-(--text-primary)"
          type="text"
          placeholder="Search workspace.."
        />
      </div>
      <div className="flex items-center gap-2">
        {mode === "light" ? (
          <button
            type="button"
            aria-label="Switch to dark mode"
            onClick={handleThemeChange}
            className="cursor-pointer rounded-lg p-2 transition hover:bg-(--bg-hover)"
          >
            <Moon size={23} />
          </button>
        ) : (
          <button
            type="button"
            aria-label="Switch to light mode"
            onClick={handleThemeChange}
            className="cursor-pointer rounded-lg p-2 transition hover:bg-(--bg-hover)"
          >
            <Lightbulb size={23} />
          </button>
        )}

        <button
          type="button"
          aria-label="Notifications"
          className="cursor-pointer rounded-lg p-2 transition hover:bg-(--bg-hover)"
        >
          <Bell size={23} />
        </button>
        <button
          type="button"
          aria-label="Menu"
          className="cursor-pointer rounded-lg p-2 transition hover:bg-(--bg-hover)"
        >
          <Menu size={23} />
        </button>
        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-(--text-primary) transition hover:bg-(--bg-hover) disabled:cursor-wait disabled:opacity-60"
        >
          <LogOut size={20} />
          <span>{isLoggingOut ? 'Logging out...' : 'Log out'}</span>
        </button>
      </div>
    </div>
  );
};

export default TopNav;