import React from "react";
import ArticleList from "./ArticleList";
import {
  StyledHomeContentSection2,
  StyledTitleSection,
  StyledTitleSplit,
  StyledTitleSectionChild,
  StyledSeeMoreActicles,
  StyledIconArrowRight
} from "./StyledHomeComeSection2";

const HomeContentSection2 = () => {
  return (
    <StyledHomeContentSection2>
      <StyledTitleSection>Latest Articles</StyledTitleSection>
      <StyledTitleSplit>
        <StyledTitleSectionChild>Unravel more beauty</StyledTitleSectionChild>
        <StyledSeeMoreActicles>
          See more
          <StyledIconArrowRight></StyledIconArrowRight>
        </StyledSeeMoreActicles>
      </StyledTitleSplit>
      <ArticleList />
    </StyledHomeContentSection2>
  );
};

export default HomeContentSection2;
