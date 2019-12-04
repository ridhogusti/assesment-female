import React from "react";
import {
  StyledMainHeader,
  StyledMainHeaderLeft,
  StyledIcMenu,
  StyledMenuSearchInputField,
  StyledSearchInputHome,
  StyledMainHeaderRight,
  StyledHeaderLogin,
  StyledLinkLogin
} from "./StyledHeader";
import IconMenu from "../../assets/images/menu";
import IconSearch from "../../assets/images/search";
import logoFemaleDaily from "../../assets/images/logoFemaleDaily.png";

const MainHeader = () => {
  return (
    <StyledMainHeader>
      <StyledMainHeaderLeft>
        <StyledIcMenu>
          <IconMenu></IconMenu>
        </StyledIcMenu>
        <img src={logoFemaleDaily} alt="logo" width="148" height="auto" />
      </StyledMainHeaderLeft>
      <form
        style={{
          width: "100%"
        }}
      >
        <StyledMenuSearchInputField>
          <IconSearch></IconSearch>
          <StyledSearchInputHome placeholder="Search products, acticles, topics, brands, etc"></StyledSearchInputHome>
        </StyledMenuSearchInputField>
      </form>
      <StyledMainHeaderRight>
        <StyledHeaderLogin>
          <StyledLinkLogin>LOGIN / SIGNUP</StyledLinkLogin>
        </StyledHeaderLogin>
      </StyledMainHeaderRight>
    </StyledMainHeader>
  );
};

export default MainHeader;
