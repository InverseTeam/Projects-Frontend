'use client';
//IMPROVE: improve ssr with styled components
import { IInputStyle, IWrapStyle, IPlaceholderStyle } from '.';

import styled from 'styled-components';
import { PALETTE } from '@/shared/lib/constants';

export const StyledPlaceholder = styled.label<IPlaceholderStyle>`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translate(0, -50%);
  color: ${PALETTE['placeholder-gray']};
  pointer-events: none;
  transition: all 170ms ease;

  font-family: 'LabGrotesque';
  font-size: 18px;
  font-weight: 500;

  ${({ filled }) =>
    filled
      ? `top: 17px;
  left: 18px;
  font-size: 12px;
  font-weight: 400;`
      : ''};
`;

export const StyledInput = styled.input<IInputStyle>`
  outline: none;
  border-radius: 15px;
  border: 0;
  height: 58px;
  width: 100%;
  color: ${PALETTE['text-input-black']};
  padding: 0 18px;
  background-color: ${PALETTE['bg-input-gray']};
  line-height: 0;
  padding-top: 10px;

  font-family: 'LabGrotesque';
  font-size: 16px;
  font-weight: 500;

  &:focus + ${StyledPlaceholder} {
    top: 17px;
    left: 18px;
    font-size: 12px;
    font-weight: 400;
  }

  border: 2px solid
    ${({ error }) => (error ? `${PALETTE['error-red']}` : 'transparent')};
`;

export const StyledLayout = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1.5px;
    transform-origin: left;
    transition: all 200ms ease;
    transform: scaleX(0%);
  }

  &:focus-within::after {
    transform: scaleX(100%);
  }
`;

export const StyledErrorText = styled.span`
  color: ${PALETTE['error-red']};
  font-family: 'LabGrotesque';
  font-size: 14px;
  font-weight: normal;
`;

export const StyledWrap = styled.div<IWrapStyle>`
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};
`;
