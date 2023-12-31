'use client';

import { css, styled } from 'styled-components';
import { PRIMARY_VARIANT, SECONDARY_VARIANT } from './Button.constants';
import { PALETTE } from '@/shared/lib/constants';
import { IButtonProps } from '.';

const PRIMARY_BUTTON_STYLES = css<IButtonProps>`
  background: ${PALETTE['bg-button-red']};
  color: ${PALETTE['white']};

  transition: all 0.2s;

  &:active:not(:disabled) {
    transform: scale(0.98);
    filter: brightness(95%);
  }

  &:hover:not(:disabled) {
    background: ${PALETTE['bg-button-hover-red']};
    cursor: pointer;
  }

  &:disabled {
    background: ${PALETTE['bg-button-disabled-lightred']};
    cursor: not-allowed;
  }
`;

const SECONDARY_BUTTON_STYLES = css<IButtonProps>`
  background: ${PALETTE['white']};
  color: ${PALETTE['text-button-gray']};
  border: 2px solid ${PALETTE['bg-button-border-gray']};

  transition: all 0.2s;

  &:active:not(:disabled) {
    transform: scale(0.98);
    filter: brightness(95%);
  }

  &:hover:not(:disabled) {
    border: 2px solid ${PALETTE['bg-button-border-hover-red']};
    cursor: pointer;
  }

  &:disabled {
    color: ${PALETTE['text-button-lightgray']};
    cursor: not-allowed;
  }
`;

//EXPLAIN: как это работает подробно и как это можно написать по другому
const BUTTON_VARIANTS_MAP = {
  [PRIMARY_VARIANT]: PRIMARY_BUTTON_STYLES,
  [SECONDARY_VARIANT]: SECONDARY_BUTTON_STYLES,
};

export const StyledButton = styled.button<IButtonProps>`
  border: none;
  outline: none;
  border-radius: 15px;
  font-family: MuseoSansCyrl;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};

  height: 58px;
  letter-spacing: 0.3;
  padding: 14px auto;

  ${({ variant }) => BUTTON_VARIANTS_MAP[variant || PRIMARY_VARIANT]};
`;
