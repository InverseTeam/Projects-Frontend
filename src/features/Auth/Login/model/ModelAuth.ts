import {
  IAuth,
  IError,
  IResponseAuth,
} from '@/shared/interfaces/Auth.interface';
import { ITabData } from '@/shared/ui/buttons/Tabs';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {useLoginMutation } from '../api/loginApi';
import { getTokenFromCookie, setTokenInCookie } from './SaveToken';
import { removeTokenFormCookie } from '../../Logout/model/RemoveToken';

export const ModelProfile = () => {
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [form, setForm] = useState<IAuth>({
    username: 'sazonov1',
    password: 'Sega1611',
  });

  const [errorText, setErrorText] = useState<string>();

  const [login, { error, isLoading }] = useLoginMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    removeTokenFormCookie(); 
    const responseAuth = await login(form as IAuth);
    const tokenAuth = (responseAuth as IResponseAuth).data.auth_token;
    setTokenInCookie(tokenAuth);
    
  };

  console.log('cookietoken', getTokenFromCookie());

  useEffect(() => {
    if (error) {
      const errorStatus = (error as IError).status;
      if (errorStatus == 400) {
        setErrorText('Неверный логин или пароль');
      }
    }
  }, [error]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorText('');
    const input = e.target as HTMLInputElement;
    setForm({ ...form, [input.name]: e.target.value });
  };

  const data: ITabData[] = [
    {
      id: 1,
      title: 'Ученик',
    },
    {
      id: 2,
      title: 'Преподаватель',
    },
  ];

  useEffect(() => {
    const login = form.username;
    const pass = form.password;
    if (login.length !== 0 && pass.length !== 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [form]);

  return {
    submitDisabled,
    form,
    handleSubmit,
    changeHandler,
    data,
    isLoading,
    errorText,
  };
};
