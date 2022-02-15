import { FormEvent } from 'react';

const baseUrl = process.env.REACT_APP_API_URL;

function Login() {
  const login = (params: { username: string; password: string }) => {
    fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    }).then(res => {
      if(res.ok) {
      }
    })
    // axios('/login', {
    //   baseURL: `${baseUrl}`,
    //   method: 'POST',
    //   data: params,
    // });
  };

  const hanglerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <form onSubmit={hanglerSubmit}>
      <div>
        <label htmlFor='username'>用户名</label>
        <input type='text' />
      </div>
      <div>
        <label htmlFor='password'>密码</label>
        <input type='password' />
      </div>
      <button type='submit'>登录</button>
    </form>
  );
}

export default Login;
