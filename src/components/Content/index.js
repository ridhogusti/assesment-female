import React from "react";
import HomeContentSection1 from "./HomeContentSection1";
import BannerBackgorund from "./BannerBackgorund";
import HomeContentSection2 from "./HomeContentSection2/index";
import { StyledBillboardBanner } from "./StyledContent";

const Content = () => {
  return (
    <div>
      <HomeContentSection1></HomeContentSection1>
      <BannerBackgorund></BannerBackgorund>
      <StyledBillboardBanner>
        <h4>BILLBOARD banner</h4>
        <h5>970x250 pixels</h5>
      </StyledBillboardBanner>
      <HomeContentSection2></HomeContentSection2>
    </div>
  );
};

export default Content;
