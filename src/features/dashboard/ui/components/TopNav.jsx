import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../../shared/state/ThemeSlice.jsx';

const TopNav = () => {
  let dispatch = useDispatch();

  let { mode } = useSelector((store) => store.theme);

  let handleThemeChange = () => {
    dispatch(toggleTheme());
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
      </div>
    </div>
  );
};

export default TopNav;