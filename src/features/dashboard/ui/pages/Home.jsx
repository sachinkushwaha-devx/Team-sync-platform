import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../../shared/state/themeSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <h1>this is my dashboard home page</h1>
      <button onClick={handleThemeChange}>change theme</button>
    </div>
  );
};

export default Home;
