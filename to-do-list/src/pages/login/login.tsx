type Pessoa = {
  nome: string;
  idade: number;
  email: string;
};
import { FormLogin } from '../../components/form-login/form-login';

export function Login() {
  function printPessoa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const pessoa: Pessoa = {
      nome: event.currentTarget.nome.value,
      idade: +event.currentTarget.idade.value,
      email: event.currentTarget.email.value,
    };
    console.log(pessoa);

    return pessoa;
  }

  return (
    <>
      <FormLogin />
    </>
  );
}
