import React from 'react';
import PropTypes from 'prop-types';

import useInput from '../hooks/useInput';
import { useTranslation } from 'react-i18next';

const RegisterInput = ({ register }) => {
  const { t } = useTranslation();

  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form id="register-input">
      <input className="input-component-rumpi" type="text" value={name} onChange={onNameChange} placeholder={t('name')} />
      <input className="input-component-rumpi" type="email" value={email} onChange={onEmailChange} placeholder={t('email')} />
      <input className="input-component-rumpi" type="password" value={password} onChange={onPasswordChange} placeholder={t('password')} />
      <button className="btn-primary mt-6 lg:mt-2" type="button" onClick={() => register({ name, email, password })}>{t('register')}</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
