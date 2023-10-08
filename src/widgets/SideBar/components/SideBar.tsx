"use client"

import { useState } from 'react';
import { ButtonOpen } from './ButtonOpen';
import { Navigation } from './Navigation';
import { StyledSideBar } from './SideBar.styles';

export interface SideBarStyle {
  open: boolean;
} 

export const SideBar = () => {

  const [open, setOpen] = useState(true);

  return (
    <>
      <StyledSideBar open={open}>
        {/* <ButtonOpen open={open} setOpen={()=>{}}/> */}
        <Navigation open={open}/>
      </StyledSideBar>
    </>
  );
};
