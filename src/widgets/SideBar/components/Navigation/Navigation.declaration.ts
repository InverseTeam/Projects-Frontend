import { Path } from '@/shared/routing';
import {
  PROJECTS_VARIANT,
  SPECIALIST_VARIANT,
  TIconVariant,
} from '@/shared/ui/icons/IconsNavigation/IconsNavigation.declaration';
import { ReactNode } from 'react';

interface INavsItem {
  label: string;
  href: string;
  variant: TIconVariant;
}

export const NavsItems: INavsItem[] = [
  { label: 'projets', href: '/testing', variant: PROJECTS_VARIANT },
  { label: 'set', href: '/set', variant: SPECIALIST_VARIANT },
  { label: 'test', href: '/test', variant: PROJECTS_VARIANT },
];

export interface INavigationProps {
  open: boolean;
}
