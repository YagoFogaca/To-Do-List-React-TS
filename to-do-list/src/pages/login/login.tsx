import { useState } from 'react';
import { FormLogin } from '../../components/form-login/form-login';
import { SectionLogin } from './style-login';

export function Login() {
  const [registration, setRegistration] = useState(false);
  function changePage() {
    setRegistration(!registration);
    return registration;
  }
  return (
    <SectionLogin>
      <section>
        <FormLogin changePage={changePage} />
      </section>
    </SectionLogin>
  );
}
