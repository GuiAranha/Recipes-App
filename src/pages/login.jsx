import { useHistory } from 'react-router';
import React, { useState } from 'react';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validate() {
    const re = /\S+@\S+\.\S+/;
    const validEmail = re.test(email);
    const NUMBERSIX = 6;
    if (validEmail && password.length > NUMBERSIX) {
      return false;
    }
    return true;
  }

  function onClickLogin() {
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  }

  return (
    <>
      <label htmlFor="email-input">
        <input
          data-testid="email-input"
          value={ email }
          type="email"
          id="email-input"
          placeholder="Insira seu email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password-input">
        <input
          data-testid="password-input"
          value={ password }
          type="password"
          id="password-input"
          placeholder="Insira sua senha"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ validate() }
        onClick={ onClickLogin }
      >
        Login

      </button>
    </>
  );
}
