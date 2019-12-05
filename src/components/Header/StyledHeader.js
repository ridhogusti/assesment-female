import styled from "styled-components";

const SytledHeader = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  flex-flow: column;
  background-color: #fff;
`;

// file MainHeader.js
const StyledMainHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  flex-shrink: 0;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 3;
`;
const StyledMainHeaderLeft = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-right: 30px;
`;
const StyledIcMenu = styled.span`
  margin: 0 10px;
  cursor: pointer;
`;
const StyledMenuSearchInputField = styled.div`
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-flow: row;
  align-items: center;
`;
const StyledSearchInputHome = styled.input`
  height: 36px;
  border: none;
  outline: none;
  width: 100%;
  font-size: 12px;
`;
const StyledMainHeaderRight = styled.div`
  height: 60px;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  margin-left: 30px;
`;
const StyledHeaderLogin = styled.div`
  height: 60px;
  width: 224px;
  background-color: #db284e;
`;
const StyledLinkLogin = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  font-weight: normal;
  font-size: 15px;
  padding: 0px 0px 0px 8px;
  background: url("https://femaledaily.com/static/images/ic_profile.png");
  background-position: 34px 20px;
  background-repeat: no-repeat;
  color: #fff;
`;

// file MainHeaderCategories.js
const StyledMainHeaderCategories = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  flex-shrink: 0;
  border-bottom: 1px solid #d0d0d0;
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 60px;
  z-index: 2;
  justify-content: center;
`;
const StyledMainHeaderCategoriesCenter = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
const StyledMainHeaderCategoriesItem = styled.a`
  font-weight: bold;
  font-size: 14px;
  margin: 10px 15px;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: #db284e;
  }
`;
export {
  SytledHeader,
  StyledMainHeader,
  StyledMainHeaderLeft,
  StyledIcMenu,
  StyledMenuSearchInputField,
  StyledSearchInputHome,
  StyledMainHeaderRight,
  StyledHeaderLogin,
  StyledLinkLogin,
  StyledMainHeaderCategories,
  StyledMainHeaderCategoriesCenter,
  StyledMainHeaderCategoriesItem
};
