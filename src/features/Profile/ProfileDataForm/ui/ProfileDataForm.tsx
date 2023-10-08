'use client'

import { Input } from "@/shared/ui/inputs/Input";
import { ModelProfile } from "../model/ModelProfile";

export const ProfileDataForm = () => {

    const {
       userData,
       changeHandler,

      } = ModelProfile();


  return (
    <form>
      <Input
        name="name"
        type={'text'}
        placeholder={'Имя'}
        onChange={changeHandler}
        value={userData.name}
      />
    </form>
  );
};
