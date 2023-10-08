"use client"

import { SPECIALIST_VARIANT } from '@/shared/ui/icons/IconsNavigation/IconsNavigation.declaration';
import { NavButton } from '../NavButton';
import { INavigationProps, NavsItems } from './Navigation.declaration';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export const Navigation: FC<INavigationProps> = ({open}) => {
  const pathname = usePathname();
  return (
    <>

      {NavsItems.map((item) => {
        const isCurrentPage = pathname === item.href;
        return (
          <NavButton
            open={open}
            label={item.label}
            href={item.href}
            variant={item.variant}
            active={isCurrentPage}
          />
        );
      })}
    </>
  );
};
