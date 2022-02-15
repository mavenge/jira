// 真实开发环境中，如果使用firebase这种第三方的auth服务，本文件不需要开发
const baseUrl = process.env.REACT_APP_API_URL;

const localStorageKey = '__auth_provider_token__';

export const getToken = () => window.localStorage.getitem(localStorageKey);

export const handleUserResponse = ({user}: {user: Api.User}) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  // 为什么要return user 呢
  return user
}

export const login = (data: {username: string; password: string}) => {
  fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(async res => {
    if(res.ok) {
      // 这里为什么要return呢
      return handleUserResponse(await res.json())
    }
  })
}

export const register = (data: {username: string; password: string}) => {
  fetch(`${baseUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(async res => {
    if(res.ok) {
      // 这里为什么要return呢
      return handleUserResponse(await res.json())
    }
  })
}

export const logout = () => window.localStorage.removeItem(localStorageKey)