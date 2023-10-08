'use client';

import { Button } from '@/shared/ui/buttons/Button';
import { Input } from '@/shared/ui/inputs/Input';
import { Tabs, ITabData } from '@/shared/ui/buttons/Tabs';

import styles from './LoginForm.module.scss';
import { ModelProfile } from '../../model/ModelAuth';
import { IAuth } from '@/shared/interfaces/Auth.interface';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
//TODO: isLoading styles

interface IModelProfile {
  submitDisabled: boolean;
  form: IAuth;
  handleSubmit: () => void;
  changeHandler: () => void;
  data: ITabData[];
  isLoading: boolean;
  errorText: string;
}
//TODO: add type for error
export const LoginForm = () => {
  const {
    submitDisabled,
    form,
    handleSubmit,
    changeHandler,
    data,
    isLoading,
    errorText,
  } = ModelProfile();

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <form className={styles.formWrap} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Вход</h1>
      {isLoading && <h1>Loading...</h1>}
      <Tabs
        tabs={data}
        widthTab={'140px'}
        onChange={() => {}}
        className={styles.tabs}
      />

      <Input
        name="username"
        type={'text'}
        placeholder={'Логин'}
        onChange={changeHandler}
        value={form.username}
        className={styles.input}
        error={errorText && errorText.length > 0 ? ' ' : ''}
      />
      <Input
        name="password"
        type={'password'}
        placeholder={'Пароль'}
        onChange={changeHandler}
        value={form.password}
        className={styles.input}
        error={errorText}
      />
      <Button
        type={'submit'}
        disabled={submitDisabled}
        onClick={() => {}}
        className={styles.input}
      >
        Войти
      </Button>

      {/* {error && error.status === 400 ? <h2></h2>} */}
    </form>
  );
};
