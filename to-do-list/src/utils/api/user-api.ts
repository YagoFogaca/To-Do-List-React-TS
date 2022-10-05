import { LoginUser } from '../types/login-user-parameter';
const url = 'https://task-planning-api.herokuapp.com/user/';

export class UserApi {
  static async Login(user: LoginUser) {
    const userLogin = await fetch(url + 'login-user', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(user),
    });

    return await userLogin.json();
  }
}
