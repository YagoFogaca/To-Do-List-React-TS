import { Form } from '../style-forms';
import { Label } from '../../../label-form/label';
import { Input } from '../../../input/input';
import { inputsData } from '../../../../utils/data-components/input-registration/input-registration';
import { BtnSbumit } from '../../../btn/btn-submit';
import { BtnOnClick } from '../../../btn/btn-onClick';
import { Select } from './style-form';
import { UserApi } from '../../../../utils/api/user-api';
import { FormEvent, useState } from 'react';

export function FormCreateUser({ changePage }: any) {
  const [avatar, setAvatar] = useState('./public/user-picture/7.png');

  async function createUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = {
      name: event.currentTarget.userName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      image: avatar,
    };
    const response = await UserApi.CreateUser(user);
  }

  return (
    <>
      <Form onSubmit={createUser}>
        <figure>
          <img src={avatar} alt="Avatar" />
        </figure>
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
        <Label text={'Avatar: '} htmlFor={'avatar'} />
        <Select
          onChange={(event) => {
            setAvatar(event.currentTarget.value);
          }}
        >
          <option value="./public/user-picture/7.png"></option>
          <option value="./public/user-picture/1.png">Avatar - 1</option>
          <option value="./public/user-picture/2.png">Avatar - 2</option>
          <option value="./public/user-picture/3.png">Avatar - 3</option>
          <option value="./public/user-picture/4.png">Avatar - 4</option>
          <option value="./public/user-picture/5.png">Avatar - 5</option>
          <option value="./public/user-picture/6.png">Avatar - 6</option>
          <option value="./public/user-picture/7.png">Avatar - 7</option>
        </Select>
        <div className="section-btn">
          <BtnSbumit
            type={'submit'}
            backgroundP={'rgb(85, 255, 85)'}
            text={'Registrar'}
          />
          <BtnOnClick
            onClick={changePage}
            type={'button'}
            backgroundP={'rgb(246, 107, 14)'}
            text={'Login'}
          />
        </div>
      </Form>
    </>
  );
}
