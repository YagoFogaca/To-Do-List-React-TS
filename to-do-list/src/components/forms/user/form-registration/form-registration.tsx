import { Form } from '../style-forms';
import { Label } from '../../../label-form/label';
import { Input } from '../../../input/input';
import { BtnSbumit } from '../../../btn/btn-submit';
import { BtnOnClick } from '../../../btn/btn-onClick';
import { Select } from './style-form';
import { UserApi } from '../../../../utils/api/user-api';
import { FormEvent, useState } from 'react';

export function FormCreateUser({ changePage }: any) {
  const [avatar, setAvatar] = useState('./public/user-picture/7.png');
  const [formMessageName, setFormMessageName] = useState(false);
  const [formMessagePsw, setFormMessagePsw] = useState(false);
  const [badRegistration, setbadRegistration] = useState(false);

  function messageName(event: React.FormEvent<HTMLFormElement>) {
    if (event.currentTarget.value.length < 3) {
      return setFormMessageName(true);
    } else {
      return setFormMessageName(false);
    }
  }

  function messagePsw(event: React.FormEvent<HTMLFormElement>) {
    if (event.currentTarget.value.length < 6) {
      return setFormMessagePsw(true);
    } else {
      return setFormMessagePsw(false);
    }
  }

  async function createUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const user = {
        name: event.currentTarget.userName.value,
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
        image: avatar,
      };
      const response = await UserApi.CreateUser(user);
    } catch (err) {
      console.log(err);
      setbadRegistration(true);
    }
  }

  return (
    <>
      <Form onSubmit={createUser}>
        <figure>
          <img src={avatar} alt="Avatar" />
        </figure>

        {badRegistration ? <h2>Email já registrado</h2> : <h2></h2>}

        <Label text={'Nome:'} htmlFor={'text'} />
        {formMessageName ? <h2>Nome invalido</h2> : <></>}
        <Input
          validation={messageName}
          idP={'text'}
          nameP={'userName'}
          placeholderP={'Seu Nome...'}
          requiredP={true}
          typeP={'text'}
        />

        <Label text={'Email:'} htmlFor={'email'} />
        <Input
          idP={'email'}
          nameP={'email'}
          placeholderP={'Seu Email...'}
          requiredP={true}
          typeP={'email'}
        />

        <Label text={'Senha:'} htmlFor={'password'} />
        {formMessagePsw ? <h2>Senha invalida</h2> : <></>}
        <Input
          validation={messagePsw}
          idP={'password'}
          nameP={'password'}
          placeholderP={'shhhhhh...'}
          requiredP={true}
          typeP={'password'}
        />

        <Label text={'Avatar: '} htmlFor={'avatar'} />
        <Select
          onChange={(event) => {
            setAvatar(event.currentTarget.value);
          }}
        >
          <option value="/user-picture/7.png"></option>
          <option value="/user-picture/1.png">Avatar - 1</option>
          <option value="/user-picture/2.png">Avatar - 2</option>
          <option value="/user-picture/3.png">Avatar - 3</option>
          <option value="/user-picture/4.png">Avatar - 4</option>
          <option value="/user-picture/5.png">Avatar - 5</option>
          <option value="/user-picture/6.png">Avatar - 6</option>
          <option value="/user-picture/7.png">Avatar - 7</option>
        </Select>

        <div className="section-btn">
          <BtnSbumit
            type={'submit'}
            backgroundP={'rgb(85, 255, 85)'}
            text={'Registrar'}
          />
          <BtnOnClick
            onClick={changePage}
            type={'button'}
            backgroundP={'rgb(246, 107, 14)'}
            text={'Login'}
          />
        </div>
      </Form>
    </>
  );
}
