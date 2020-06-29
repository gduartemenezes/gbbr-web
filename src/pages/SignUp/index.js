import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <form action="">
        <input type="text" name="name" placeholder="Nome completo" />
        <input type="email" name="email" placeholder="Seu e-mail" />
        <input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Voltar para Login</Link>
      </form>
    </>
  );
}
