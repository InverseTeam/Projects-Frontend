import { IUserData } from '@/shared/interfaces/UserData.interface';
import { ChangeEvent, useState } from 'react';

export const ModelProfile = () => {
  const [userData, setUserData] = useState<IUserData>({
    name: '',
    lastname: '',
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setUserData({ ...userData, [input.name]: e.target.value });
  };

  return {
    userData,
    changeHandler,
  };
};
