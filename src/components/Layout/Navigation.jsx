import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ThemeSwitcher from '../ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher';

const Navigation = ({ authUser, signOut }) => {
  const { t } = useTranslation();
  const { id, avatar, name } = authUser;
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div id="app-header__navigation" className="min-h-16 flex gap-4 justify-between items-center px-8 py-0">
      <div id="app-header__navigation__logo">
        <h1 className="text-3xl font-semibold tracking-wide">
          <Link to="/">Rumpi.</Link>
        </h1>
      </div>
      <h2 className="text-lg font-medium hidden lg:flex">Halo, <strong>{name}!</strong></h2>
      <div id="app-heaader__navigation__menu" className="flex gap-4 items-center">
        <nav className="hidden md:flex hover:bg-amber-500 p-2 rounded-lg">
          <Link to="/add">{t('new_thread')}</Link>
        </nav>
        <nav className="hidden md:flex hover:bg-amber-500 p-2 rounded-lg">
          <Link to="/leaderboards">{t('leaderboards')}</Link>
        </nav>
        <nav className="hidden md:flex">
          <LanguageSwitcher />
        </nav>
        <nav className="hidden md:flex hover:bg-amber-500 p-2 rounded-lg">
          <ThemeSwitcher />
        </nav>
        <img className="rounded-full w-8 align-middle cursor-pointer" src={avatar} alt={id} title={name} onClick={togglePopup} />
        {isPopupVisible && (
          <div className="absolute top-20 right-4 w-48 bg-white dark:bg-gray-700 border border-gray-300 rounded-lg shadow-lg z-10">
            <div>
              <p className="px-4 py-2 text-sm text-gray-700 dark:text-white">hi, {name}!</p>
              <div className="border-t-2 border-gray-200 md:hidden">
                <nav className="p-2">
                  <LanguageSwitcher />
                </nav>
              </div>
              <div className="border-t-2 border-gray-200 md:hidden">
                <nav className="px-4 py-2 text-sm text-gray-700">
                  <Link to="/add">{t('new_thread')}</Link>
                </nav>
                <nav className="px-4 py-2 text-sm text-gray-700">
                  <Link to="/leaderboards">{t('leaderboards')}</Link>
                </nav>
              </div>
              <button
                type="button"
                className="w-full text-left text-red-500 hover:bg-gray-100 border-t-2 border-gray-200 px-4 py-2"
                onClick={signOut}
              >
                {t('signout')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
