'use client';

import { Tab } from '@headlessui/react';
import { FC, Fragment } from 'react';

import { StyledTab } from './Tabs.styles';
import { ITabsProps, ITabData } from './Tabs.declarations';

import styles from './Tab.module.scss';

export const Tabs: FC<ITabsProps> = ({
  tabs,
  onChange,
  widthTab,
  className,
  ...props
}) => {
  return (
    <Tab.Group
      as={Fragment}
      manual
      onChange={(index) => onChange(index)}
      className={className}
    >
      <Tab.List className={styles.wrap}>
        {tabs.map((tab: ITabData) => (
          <Tab as={Fragment}>
            {({ selected }) => (
              <StyledTab active={selected} width={widthTab}>
                {tab.title}
              </StyledTab>
            )}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
    // <StyledToggleButtonWrap>
    //   <StyledButton
    //     variant={variant}
    //     disabled={disabled}
    //     onClick={onClick}
    //     type={type}
    //     fullWidth={!fullWidth}
    //     {...props}
    //   >
    //     {children}
    //   </StyledButton>
    //   <StyledButton
    //     variant={'secondary'}
    //     disabled={disabled}
    //     onClick={onClick}
    //     type={type}
    //     fullWidth={!fullWidth}
    //     {...props}
    //   >
    //     {children}
    //   </StyledButton>
    // </StyledToggleButtonWrap>
  );
};
