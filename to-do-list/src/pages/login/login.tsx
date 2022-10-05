import { useState } from 'react';
import { FormLogin } from '../../components/form-login/form-login';
import { SectionLogin } from './style-login';

export function Login() {
  const [registration, setRegistration] = useState(false);
  return (
    <SectionLogin>
      <FormLogin />
    </SectionLogin>
  );
}
