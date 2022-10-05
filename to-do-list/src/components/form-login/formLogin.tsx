type Login = {
  email: string;
  password: string;
};

export function FormLogin() {
  function printPessoa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const pessoa: Login = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
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
