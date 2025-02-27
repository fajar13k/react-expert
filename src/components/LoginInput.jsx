import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import useInput from '../hooks/useInput';

const LoginInput = ({ login }) => {
  const { t } = useTranslation();

  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form id="login-input">
      <input id="login-input__email" className="input-component-rumpi" type="text" value={email} onChange={onEmailChange} placeholder={t('email')} />
      <input id="login-input__password" className="input-component-rumpi" type="password" value={password} onChange={onPasswordChange} placeholder={t('password')} />
      <button id="login-input__btn__login" className="btn-primary mt-6 lg:mt-2" type="button" onClick={() => login({ email, password })}>{t('login')}</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;