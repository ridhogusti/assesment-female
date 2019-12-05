import React from "react";
import {
  StyledHomeContentSection1,
  StyledBannerTop,
  StyledBillboardBanner
} from "./StyledContent";

const HomeContentSection1 = () => {
  return (
    <StyledHomeContentSection1>
      <StyledBannerTop>
        <h4>TOP FRAME banner</h4>
        <h5>970x50 pixels</h5>
      </StyledBannerTop>
      <StyledBillboardBanner>
        <h4>BILLBOARD banner</h4>
        <h5>970x250 pixels</h5>
      </StyledBillboardBanner>
    </StyledHomeContentSection1>
  );
};

export default HomeContentSection1;
