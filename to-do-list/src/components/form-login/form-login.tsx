import { FormEvent } from 'react';
import { Input } from '../input/input';
import { Label } from '../label-form/label';
import { inputsData } from '../../utils/data-components/inputs/inputs-login';
import { Form } from './style-login';
import { BtnSbumit } from '../btn/btn-submit';
import { BtnOnClick } from '../btn/btn-onClick';
import { UserApi } from '../../utils/api/user-api';

export function FormLogin({ changePage }: any) {
  async function printPessoa(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    const response = await UserApi.Login(user);
    localStorage.setItem('token', response.jwToken);
  }

  return (
    <Form onSubmit={(event) => printPessoa(event)}>
      {inputsData.map((item, index) => {
        return (
          <>
            <Label text={item.label} htmlFor={item.idP} key={item.idP} />
            <Input
              idP={item.idP}
              nameP={item.nameP}
              placeholderP={item.placeholderP}
              requiredP={item.requiredP}
              typeP={item.typeP}
              key={index}
            />
          </>
        );
      })}
      <div className="section-btn">
        <BtnSbumit
          type={'submit'}
          backgroundP={'rgb(85, 255, 85)'}
          text={'Login'}
        />
        <BtnOnClick
          onClick={changePage}
          type={'button'}
          backgroundP={'rgb(246, 107, 14)'}
          text={'Cadastro'}
        />
      </div>
    </Form>
  );
}
