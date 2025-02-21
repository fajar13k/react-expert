import React from 'react';
import PropTypes from 'prop-types';

import useInput from '../hooks/useInput';

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form id="register-input">
      <input className="input-component-rumpi" type="text" value={name} onChange={onNameChange} placeholder="Nama" />
      <input className="input-component-rumpi" type="email" value={email} onChange={onEmailChange} placeholder="Email" />
      <input className="input-component-rumpi" type="password" value={password} onChange={onPasswordChange} placeholder="Kata Sandi" />
      <button className="btn-primary mt-6 lg:mt-2" type="button" onClick={() => register({ name, email, password })}>Register</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
