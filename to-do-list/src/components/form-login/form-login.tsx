import { FormEvent } from 'react';
import { Input } from '../input/input';
import { inputs } from '../../utils/data-components/inputs/inputs-login';
import { SectionForm } from './style-login';

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
        {inputs.map((item, index) => {
          return (
            <Input
              idP={item.idP}
              nameP={item.nameP}
              placeholderP={item.placeholderP}
              requiredP={item.requiredP}
              typeP={item.typeP}
              key={index}
            />
          );
        })}
        <button type="submit">Login</button>
      </form>
    </SectionForm>
  );
}
