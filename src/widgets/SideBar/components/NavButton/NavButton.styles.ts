import { styled } from 'styled-components';
import { INavButtonStyle } from './NavButton.declaration';
import { PALETTE } from '@/shared/lib/constants';

export const StyledLabel = styled.h1<INavButtonStyle>`
  font-family: 'LabGrotesque';
  font-size: 14px;
  font-weight: 500;

  color: ${({ active }) =>
    !active ? PALETTE['text-button-lightgray'] : PALETTE['text-black']};

  // transition-delay: 4s;

  @keyframes slideFromLeft {
    0% {
      transform: translateX(-100%); /* Начальное положение текста */
      opacity: 0; /* Начальная прозрачность */
    }
    100% {
      transform: translateX(0); /* Конечное положение текста */
      opacity: 1; /* Конечная прозрачность */
    }
  }
  animation: slideFromLeft .4s ease-in-out; /* Длительность и тип анимации */
`;

export const StyledNavButton = styled.div<INavButtonStyle>`
  width: 100%;
  heigth: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 12px;
  background: ${({ active }) =>
    active ? PALETTE['bg-button-gray'] : 'transparent'};

  border-radius: 8px;
  gap: 12px;


  &:hover {
    ${StyledLabel} {
      color: ${PALETTE['text-black']};
    }
    background-color: ${PALETTE['bg-button-gray']};
  }
`;


