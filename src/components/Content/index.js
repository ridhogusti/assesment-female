import React from "react";
import HomeContentSection1 from "./HomeContentSection1";
import BannerBackgorund from "./BannerBackgorund";
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
    </div>
  );
};

export default Content;
