import { ChevronIcon } from '@/shared/ui/icons/ChevronIcon';

import { StyledButtonOpen } from './ButtonOpen.styles';
import { FC } from 'react';
import { IButtonOpenProps } from './ButtonOpen.declaration';

export const ButtonOpen: FC<IButtonOpenProps> = ({ open, setOpen }) => {
  return (
    <StyledButtonOpen right={open} onClick={() => setOpen(!open)}>
      <ChevronIcon />
    </StyledButtonOpen>
  );
};
