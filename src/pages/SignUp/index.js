import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é um campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é um campo obrigatório'),
  password: Yup.string()
    .min(6, 'Sua senha deve ter no mínimo 6 caracteres')
    .required('Senha é um campo obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
