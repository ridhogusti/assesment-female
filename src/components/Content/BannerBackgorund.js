import React from "react";
import {
  StyledBannerBackground,
  StyledBannerSection,
  StyledBannerContainer,
  StyledBannerTitle,
  StyledBannerDesc,
  StyledButtonBanner
} from "./StyledBannerBackground";

const BannerBackgorund = () => {
  return (
    <StyledBannerBackground>
      <StyledBannerSection>
        <StyledBannerContainer>
          <StyledBannerTitle>
            Psst! We give product matches that will be perfect for you!
          </StyledBannerTitle>
          <StyledBannerDesc>
            They will fit your skin, hair, body, AND they solve your beauty
            concerns at the same time. Sign up and complete your Beauty ID now!
          </StyledBannerDesc>
          <StyledButtonBanner>Log In / Sign Up</StyledButtonBanner>
        </StyledBannerContainer>
      </StyledBannerSection>
    </StyledBannerBackground>
  );
};

export default BannerBackgorund;
