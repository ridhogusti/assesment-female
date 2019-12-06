import React, { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import {
  StyledHomeContentSection2,
  StyledTitleSection,
  StyledTitleSplit,
  StyledTitleSectionChild,
  StyledSeeMoreActicles,
  StyledIconArrowRight
} from "./StyledHomeComeSection2";

const HomeContentSection2 = ({ data }) => {
  const [dataEditor, setDataEditor] = useState([]);

  useEffect(() => {
    if (data.data.length !== 0) {
      setDataEditor(data.data["latest articles"]);
    }
  }, [data]);
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
      <ArticleList data={dataEditor} />
    </StyledHomeContentSection2>
  );
};

export default HomeContentSection2;
