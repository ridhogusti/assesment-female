import React from "react";
import HomeContentSection1 from "./HomeContentSection1";
import BannerBackgorund from "./BannerBackgorund";
import HomeContentSection2 from "./HomeContentSection2/index";
import { StyledBillboardBanner } from "./StyledContent";

const Content = ({ data }) => {
  return (
    <div>
      <HomeContentSection1 data={data}></HomeContentSection1>
      <BannerBackgorund></BannerBackgorund>
      <StyledBillboardBanner>
        <h4>BILLBOARD banner</h4>
        <h5>970x250 pixels</h5>
      </StyledBillboardBanner>
      <HomeContentSection2 data={data}></HomeContentSection2>
    </div>
  );
};

export default Content;
