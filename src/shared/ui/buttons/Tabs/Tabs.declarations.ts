import { MouseEventHandler, ReactNode } from 'react';

// import { TOGGLE_VARIANTS } from './ToggleButtons.constants';

//EXPLAIN: как это работает подробно и как это можно написать по другому
// export type TToggleVariant = (typeof TOGGLE_VARIANTS)[number];

export interface ITabData {
  id: number
  title: string;
}

export interface ITabsProps {
  tabs: ITabData[];
  widthTab: string;
  onChange(props: any): void;
  className?: string;
}


export interface ITabsStyle {
  active: boolean;
  width: string;
}