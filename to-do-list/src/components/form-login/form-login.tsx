import { FormEvent } from 'react';
import { Input } from '../input/input';
import { Label } from '../label-form/label';
import { inputsData } from '../../utils/data-components/inputs/inputs-login';
import { SectionForm } from './style-login';
import { BtnSbumit } from '../btn/btn-submit/btn-submit';
import { btnData } from '../../utils/data-components/btns/btn-login';

import { UserApi } from '../../utils/api/user-api';

export function FormLogin() {
  async function printPessoa(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    const response = await UserApi.Login(user);
    localStorage.setItem('token', response.jwToken);

    console.log(localStorage.getItem('token'));
  }

  return (
    <SectionForm>
      <form onSubmit={(event) => printPessoa(event)}>
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
          {btnData.map((item, index) => {
            return (
              <BtnSbumit
                key={index}
                type={'submit'}
                backgroundP={item.background}
                text={item.text}
                className={item.className}
              />
            );
          })}
        </div>
      </form>
    </SectionForm>
  );
}
