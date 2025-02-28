import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';

import { toggleTheme } from '../states/theme/action';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="transition-colors duration-500"
    >
      {theme === 'dark' ? <FaRegSun /> : <FaRegMoon />}
    </button>
  );
};

export default ThemeSwitcher;