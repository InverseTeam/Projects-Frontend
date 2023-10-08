'use client'

import { Button } from '@/shared/ui/buttons/Button';
import { Input } from '@/shared/ui/inputs/Input';

import { LoginForm } from '@/features/Auth/Login'

import './ui.scss';
import { SideBar } from '@/widgets/SideBar';

export default function Testing() {
const handleClick = () => {
  console.log('nice cock')
}

 


  return (
    <div>
      {/* <Input type={'password'} error={'Неправильный пароль'} placeholder={'Email'} />
      <div className='button-wrap'>
        <Button onClick={handleClick}>Send Message</Button>
      </div> */}
      {/* <LoginForm/> */}
      <SideBar/>
      

    </div>
  );
}
