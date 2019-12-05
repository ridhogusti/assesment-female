import styled, { css } from "styled-components";

// file HomeContentSection1.js
const StyledHomeContentSection1 = styled.div`
  width: 1140px;
  margin: 0 auto;
`;

const CssBanner = css`
  width: 970px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    color: #fff;
    margin: 0;
  }
`;

const StyledBannerTop = styled.div`
  ${CssBanner};
  margin: 0 auto;
  height: 50px;
`;
const StyledBillboardBanner = styled.div`
  ${CssBanner};
  margin: 20px auto;
  height: 250px;
`;
export { StyledHomeContentSection1, StyledBannerTop, StyledBillboardBanner };
