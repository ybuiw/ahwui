import styled, { css } from "styled-components";

export const DrawerWrap = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  ${({ open }) => open && css`
    ${MaskWrap} {
      opacity: 1;
    }
    ${DrawerContent} {
      transition: all 300ms cubic-bezier(0, 0, 0.2, 1);
      opacity: 1;
      transform: translateX(0%);
    }
  `}
`;

export const MaskWrap = styled.div`
  background-color: rgba(0, 0, 0, .3);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 300ms cubic-bezier(.36, .66, .04, 1);
`;

export const DrawerContent = styled.div`
  right: 0;
  transform: translateX(100%);
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  background: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.6, 1);
`;