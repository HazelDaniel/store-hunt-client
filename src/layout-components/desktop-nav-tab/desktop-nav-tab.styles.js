import styled from "styled-components";
import { makeFullSizeBlock, makeRowFlexCenter } from "../../styles/styles.js";

export const DesktopNavTabStyled = styled.nav`
  border: unset;
  margin-right: 5vw;
  background-color: unset;
  width: fit-content;
  max-width: 30%;
  margin-left: auto;
  height: 80%;

  @media screen and (max-width: 640px) {
    display: none !important;
  }
`;
export const DesktopNavLinksStyled = styled.ul`
  ${makeFullSizeBlock};
  ${makeRowFlexCenter};
  justify-content: space-evenly;
`;
export const DesktopNavLinkStyled = styled.li`
  width: 10rem;

  a {
    font-family: openSansLight, sans-serif;
    font-weight: 300;
    color: ${({ theme }) => theme.$lessBrightColor};
  }
`;
