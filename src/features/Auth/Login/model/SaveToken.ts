
export const setTokenInCookie = (token: string) => {
  console.log('save', token)
  document.cookie = `token=${token}; max-age=3600; path=/`;

};

// Функция для чтения токена из cookie
export const getTokenFromCookie = () => {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'token') {
      return value;
    }
  }
  return null;
};
