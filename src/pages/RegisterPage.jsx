import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ email, name, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));

    navigate('/');
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] min-h-screen">
      <header className="flex items-center justify-center text-9xl bg-amber-500">
        <h1>Rumpi.</h1>
      </header>
      <article className="flex gap-4 justify-center flex-col pt-0 px-8 lg:p-16 bg-gray-100 dark:text-white dark:bg-gray-800">
        <h2 className="font-light text-4xl lg:text-5xl">Hayu ngarumpi!</h2>
        <RegisterInput register={onRegister} />

        <p>
          {t('already_have_account')}
          {' '}
          <Link className="text-amber-500 font-2xl" to="/">{t('login')}</Link>
        </p>
      </article>
    </section>
  );
};

export default RegisterPage;
