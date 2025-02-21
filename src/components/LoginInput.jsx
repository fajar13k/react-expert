import React from 'react';
import PropTypes from 'prop-types';

import useInput from '../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form id="login-input">
      <input className="input-component-rumpi" type="text" value={email} onChange={onEmailChange} placeholder="Email" />
      <input className="input-component-rumpi" type="password" value={password} onChange={onPasswordChange} placeholder="Kata Sandi" />
      <button className="btn-primary mt-6 lg:mt-2" type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;