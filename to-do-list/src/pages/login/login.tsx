import { useState } from 'react';
import { FormLogin } from '../../components/forms/user/form-login/form-login';
import { SectionLogin } from './style-login';
import { FormCreateUser } from '../../components/forms/user/form-registration/form-registration';

export function Login() {
  const [registration, setRegistration] = useState(false);
  function changePage() {
    setRegistration(!registration);
    return registration;
  }
  return (
    <SectionLogin>
      <section>
        {registration ? (
          <FormCreateUser changePage={changePage} />
        ) : (
          <FormLogin changePage={changePage} />
        )}
      </section>
    </SectionLogin>
  );
}
