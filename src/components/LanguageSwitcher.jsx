import React from 'react';
import { setLanguage } from '../states/languages/action';
import { useDispatch } from 'react-redux';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();

  const changeLanguage = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <div className="flex flex-col items-start">
      <select
        id="language-select"
        onChange={changeLanguage}
        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="en">{getUnicodeFlagIcon('GB')} English</option>
        <option value="id">{getUnicodeFlagIcon('ID')} Bahasa Indonesia</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
