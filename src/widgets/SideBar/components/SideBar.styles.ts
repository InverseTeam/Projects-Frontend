import styled from 'styled-components';
import { SideBarStyle } from './SideBar';

export const StyledSideBar = styled.div<SideBarStyle>`
  height: 100vh;
  width: ${({ open }) => (open ? '256px' : '92px')};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 2px 50px 0px rgba(0, 0, 0, 0.06);

  position: relative;
  transition: all 0.4s ease-in-out;
  background: white;
position: fixed;
`;
