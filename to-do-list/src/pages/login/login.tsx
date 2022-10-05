type Pessoa = {
  nome: string;
  idade: number;
  email: string;
};
import { FormLogin } from '../../components/form-login/formLogin';

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
      <form onSubmit={(event) => printPessoa(event)}>
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
