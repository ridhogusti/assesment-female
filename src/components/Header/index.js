import React from "react";
import { SytledHeader } from "./StyledHeader";
import MainHeader from "./MainHeader";
import MainHeaderCategories from "./MainHeaderCategories";

const Header = () => {
  return (
    <SytledHeader>
      <MainHeader></MainHeader>
      <MainHeaderCategories></MainHeaderCategories>
    </SytledHeader>
  );
};

export default Header;
