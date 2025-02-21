import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] min-h-screen">
      <header className="flex items-center justify-center text-9xl bg-amber-500">
        <h1>Rumpi.</h1>
      </header>
      <article className="flex gap-4 justify-center flex-col pt-0 px-8 lg:p-16">
        <h2 className="font-light text-4xl lg:text-5xl">
          Bangun pagi mari
          {' '}
          <strong>Rumpi</strong> dulu.
        </h2>

        <LoginInput login={onLogin} />
        <p>
          Ga punya akun?
          {' '}
          <Link className="text-amber-500 font-2xl" to="/register">Daftar</Link>
        </p>
      </article>
    </section>
  );
};

export default LoginPage;
