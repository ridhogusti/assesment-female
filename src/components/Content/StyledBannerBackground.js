import styled from "styled-components";

const StyledBannerBackground = styled.div`
  background-image: url(https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/banner_matches_visitor.png);
  background-repeat: no-repeat;
  background-position: center;
  height: 405px;
  width: 100%;
  margin: 0 0 60px 0;
`;
const StyledBannerSection = styled.div`
  width: 1140px;
  height: 405px;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
`;
const StyledBannerContainer = styled.div`
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-flow: column;
  align-items: baseline;
  margin: 40px 0 0 135px;
  padding: 0;
`;
const StyledBannerTitle = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin: 0;
`;
const StyledBannerDesc = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 15px 0 0 0;
`;
const StyledButtonBanner = styled.button`
  margin: 30px 0 0 0;
  align-self: flex-end;
  height: 45px;
  width: 190px;
  border-radius: 4px;
  border: solid 1px #db284e;
  background-color: #db284e;
  font-size: 16px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export {
  StyledBannerBackground,
  StyledBannerSection,
  StyledBannerContainer,
  StyledBannerTitle,
  StyledBannerDesc,
  StyledButtonBanner
};
