import {
  DesktopNavLinksStyled,
  DesktopNavLinkStyled,
  DesktopNavTabStyled,
} from "./desktop-nav-tab.styles";

export const DesktopNavTab = () => {
  return (
    <DesktopNavTabStyled>
      <DesktopNavLinksStyled>
        <DesktopNavLinkStyled className="desktop-nav-link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            SHOP
          </a>
        </DesktopNavLinkStyled>
        <DesktopNavLinkStyled className="desktop-nav-link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            BLOG
          </a>
        </DesktopNavLinkStyled>
        <DesktopNavLinkStyled className="desktop-nav-link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            SIGNOUT
          </a>
        </DesktopNavLinkStyled>
      </DesktopNavLinksStyled>
    </DesktopNavTabStyled>
  );
};
