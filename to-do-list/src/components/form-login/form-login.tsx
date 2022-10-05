import { FormEvent } from 'react';
import { Input } from '../input/input';
import { Label } from '../label-form/label';
import { inputsData } from '../../utils/data-components/inputs/inputs-login';
import { SectionForm } from './style-login';
import { BtnSbumit } from '../btn/btn-submit/btn-submit';
import { btnData } from '../../utils/data-components/btns/btn-login';

export function FormLogin() {
  function printPessoa(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const pessoa = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    console.log(pessoa);

    return pessoa;
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
