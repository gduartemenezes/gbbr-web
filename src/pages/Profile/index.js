import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />
        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
