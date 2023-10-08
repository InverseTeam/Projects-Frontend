import { PALETTE } from '@/shared/lib/constants';
import { styled } from 'styled-components';
import { IButtonOpenStyle } from './ButtonOpen.declaration';

export const StyledButtonOpen = styled.button<IButtonOpenStyle>`
  width: 28px;
  height: 28px;
  outline: none;
  background-color: ${PALETTE['white']};
  border-radius: 8px;
  border: 1px solid ${PALETTE['bg-button-gray']};

  position: absolute;
  right: -14px;
  top: 34px;

  transform: ${({ right }) => (right ? 'rotate(90deg)' : 'rotate(-90deg)')};

  transition: transform .2s ease-in-out;  
`;
