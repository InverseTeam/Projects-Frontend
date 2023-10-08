'use client';

import { css, styled } from 'styled-components';
import { PALETTE } from '@/shared/lib/constants';
import { ITabsStyle } from './Tabs.declarations';

const ACTIVE_TAB_STYLES = css`
  background: ${PALETTE['bg-button-red']};
  color: ${PALETTE['white']};

  // transition: all 0.1s;

  &:hover:not(:disabled) {
    background: ${PALETTE['bg-button-hover-red']};
    cursor: pointer;
  }

  &:disabled {
    background: ${PALETTE['bg-button-disabled-lightred']};
    cursor: not-allowed;
  }
`;

const NOT_ACTIVE_TAB_STYLES = css`
  background: ${PALETTE['bg-tab-gray']};
  color: ${PALETTE['text-tab-gray']};

  transition: all 0.1s;

  &:hover:not(:disabled) {
    border: 2px solid ${PALETTE['bg-button-border-hover-red']};
    cursor: pointer;
  }

  &:disabled {
    color: ${PALETTE['text-button-lightgray']};
    cursor: not-allowed;
  }
`;

export const StyledTab = styled.button<ITabsStyle>`
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: MuseoSansCyrl;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;

  width: ${({ width }) => width};

  min-height: 33px;
  letter-spacing: 0.3;
  padding: 14px auto;

  ${({ active }) => (active ? ACTIVE_TAB_STYLES : NOT_ACTIVE_TAB_STYLES)};
`;
// width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
// ${({variant}) => BUTTON_VARIANTS_MAP[variant || PRIMARY_VARIANT]};

export const StyledTabsWrap = styled.div`
  display: flex;
  width: 100%;
`;
